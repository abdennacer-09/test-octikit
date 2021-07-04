
new StoreinoApp({
    el: "#app_notifications",
    data: {
        data: __DATA__,
        namecolor: ["Background", "Name", "Message", "Name Product", "City", "Time"],
        gender: "female",
        query: '',
        person: "",
        randName: "Ali",
        city: "",
        products: null,
        selectedProducts: [],
        html: null,
        script: null,
        css: null,
        page: 1,
        productsIds: []
    },
    watch: {
        data:{
            deep: true,
            handler(val){
                window.__DATA__ = val;
            }
        }
    },
    async mounted() {
        this.search(); 
        if (this.data.productsIds.length != 0) {
            this.selectedProducts = (await StoreinoApp.$store.search('products', {
                "_id-in": this.data.productsIds
            })).results;  
        }
    },
    methods: {
        async search(){
            this.products = (await StoreinoApp.$store.search('products', {
                search: this.query,
                page: this.page
            })).results;
        },
        addperson() {
            if (this.gender =="male" || this.gender =="female" && this.person !="") {
                this.randName = this.person + '';
                var nameP = {
                    name: this.person,
                    gender: this.gender
                }
                this.data.users.unshift(nameP)
                this.person = "";
            }
            if (this.gender == "city" && this.person != "") {
                var city = {
                    city:this.person
                }
                this.data.cities.unshift(city)
                this.person=""
            }
        },
        removName(i){
            this.data.users.splice(i,1)
        },
        addcity() {
            if (this.city != "") {
                var city = {
                    city:this.city
                }
                this.data.cities.unshift(city)
                this.city=""
            }
        },
        romevcity(i) {
            this.data.cities.splice(i,1)
        },
        addProduct(n,i) {
            this.data.productsIds.push(n._id);
            this.selectedProducts.unshift(n);
            console.log(n);
            //this.products.splice(i, 1)
            //console.log(this.data.productsIds);
        },
        deleteProduct(i) {
            this.selectedProducts.splice(i, 1)
            this.data.productsIds.splice(i, 1)
            console.log(this.data.productsIds);
        },
        addAll() {
            this.products.map(res => {
                this.selectedProducts.unshift(res)
            })
            this.products=[]
        },
        romoveAll() {
            this.selectedProducts.map(res => {
                this.products.unshift(res)
            })
            this.selectedProducts=[]
        }
    },

})