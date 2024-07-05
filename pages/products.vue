<template>
  <div>
      <div class="card">
          <Toolbar class="mb-6">
              <template #start>
                  <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
                  <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
              </template>

              <template #end>
                  <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2" auto />
                  <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)" />
              </template>
          </Toolbar>

          <DataTable
              ref="dt"
              v-model:selection="selectedProducts"
              :value="products"
              dataKey="id"
              :paginator="true"
              :rows="10"
              :filters="filters"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              :rowsPerPageOptions="[5, 10, 25]"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
              :globalFilterFields="['title', 'category', 'price']"
              filterDisplay="menu"
          >
              <template #header>
                  <div class="flex flex-wrap gap-2 items-center justify-between">
                      <h4 class="m-0">Manage Products</h4>
                      <IconField>
                          <InputIcon>
                              <i class="pi pi-search" />
                          </InputIcon>
                          <InputText v-model="filters['global'].value" placeholder="Search..." />
                      </IconField>
                  </div>
              </template>

              <template #empty> No products found. </template>

              <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
              <Column field="id" header="ID" sortable style="min-width: 6rem"></Column>
              <Column field="title" header="Name" sortable style="min-width: 16rem">
                  <template #filter="{ filterModel }">
                      <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
                  </template>
              </Column>
              <Column header="Image">
                  <template #body="slotProps">
                      <img :src="slotProps.data.image" :alt="slotProps.data.title" class="rounded" style="width: 64px" />
                  </template>
              </Column>
              <Column field="price" header="Price" sortable style="min-width: 8rem">
                  <template #body="slotProps">
                      {{ formatCurrency(slotProps.data.price) }}
                  </template>
                  <template #filter="{ filterModel }">
                      <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                  </template>
              </Column>
              <Column field="category" header="Category" sortable style="min-width: 10rem">
                  <template #filter="{ filterModel }">
                      <InputText v-model="filterModel.value" type="text" placeholder="Search by category" />
                  </template>
              </Column>
              <Column field="rating.rate" header="Rating" sortable style="min-width: 12rem">
                  <template #body="slotProps">
                      <Rating :modelValue="slotProps.data.rating.rate" :readonly="true" />
                  </template>
              </Column>
              <Column :exportable="false" style="min-width: 12rem">
                  <template #body="slotProps">
                      <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                      <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                  </template>
              </Column>
          </DataTable>
      </div>

      <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Product Details" :modal="true">
          <div class="flex flex-col gap-6">
              <img v-if="product.image" :src="product.image" :alt="product.title" class="block m-auto pb-4" />
              <div>
                  <label for="name" class="block font-bold mb-3">Name</label>
                  <InputText id="name" v-model.trim="product.title" required="true" autofocus :invalid="submitted && !product.title" fluid />
                  <small v-if="submitted && !product.title" class="text-red-500">Name is required.</small>
              </div>
              <div>
                  <label for="description" class="block font-bold mb-3">Description</label>
                  <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" fluid />
              </div>
              <div>
                  <label for="category" class="block font-bold mb-3">Category</label>
                  <InputText id="category" v-model="product.category" required="true" fluid />
              </div>

              <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-6">
                      <label for="price" class="block font-bold mb-3">Price</label>
                      <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" fluid />
                  </div>
                  <div class="col-span-6">
                      <label for="quantity" class="block font-bold mb-3">Quantity</label>
                      <InputNumber id="quantity" v-model="product.rating.count" integeronly fluid />
                  </div>
              </div>
          </div>

          <template #footer>
              <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
              <Button label="Save" icon="pi pi-check" @click="saveProduct" />
          </template>
      </Dialog>

      <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="flex items-center gap-4">
              <i class="pi pi-exclamation-triangle !text-3xl" />
              <span v-if="product"
                  >Are you sure you want to delete <b>{{ product.title }}</b
                  >?</span
              >
          </div>
          <template #footer>
              <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false" />
              <Button label="Yes" icon="pi pi-check" @click="deleteProduct" />
          </template>
      </Dialog>

      <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="flex items-center gap-4">
              <i class="pi pi-exclamation-triangle !text-3xl" />
              <span v-if="product">Are you sure you want to delete the selected products?</span>
          </div>
          <template #footer>
              <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false" />
              <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
          </template>
      </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const dt = ref();
const products = ref([]);
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref([]);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  price: { value: null, matchMode: FilterMatchMode.EQUALS },
});
const submitted = ref(false);

onMounted(() => {
  axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      products.value = response.data;
    })
    .catch((error) => {
      console.error('There was an error fetching the products!', error);
    });
});

const formatCurrency = (value) => {
  if (value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  return '';
};

const openNew = () => {
  product.value = {};
  submitted.value = false;
  productDialog.value = true;
};

const hideDialog = () => {
  productDialog.value = false;
  submitted.value = false;
};

const saveProduct = () => {
  submitted.value = true;

  if (product?.value.title?.trim()) {
    if (product.value.id) {
      products.value[findIndexById(product.value.id)] = product.value;
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
    } else {
      product.value.id = createId();
      product.value.image = 'https://via.placeholder.com/150';
      products.value.push(product.value);
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    }

    productDialog.value = false;
    product.value = {};
  }
};

const editProduct = (prod) => {
  product.value = { ...prod };
  productDialog.value = true;
};

const confirmDeleteProduct = (prod) => {
  product.value = prod;
  deleteProductDialog.value = true;
};

const deleteProduct = () => {
  products.value = products.value.filter(val => val.id !== product.value.id);
  deleteProductDialog.value = false;
  product.value = {};
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
};

const findIndexById = (id) => {
  let index = -1;
  for (let i = 0; i < products.value.length; i++) {
    if (products.value[i].id === id) {
      index = i;
      break;
    }
  }
  return index;
};

const createId = () => {
  let id = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

const exportCSV = () => {
  dt.value.exportCSV();
};

const confirmDeleteSelected = () => {
  deleteProductsDialog.value = true;
};

const deleteSelectedProducts = () => {
  products.value = products.value.filter(val => !selectedProducts.value.includes(val));
  deleteProductsDialog.value = false;
  selectedProducts.value = null;
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
};
</script>

<style scoped>
.p-datatable .p-column-filter-menu-button {
  display: none;
}
</style>
