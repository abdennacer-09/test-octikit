var test = true;
var stopinterval=false
var closepupap
var stopmouselive=false;
var vm = new StoreinoApp({
  el: "#app_notifications",
  data: {
    data: __DATA__,
    pending:false,
    products: null,
    transistion: "",
    name: "",
    buy: "",
    city: "",
    product: "",
    imagesrc: "",
    nameProduct: "",
    urlProduct: "",
    time: "",
    unit: "",
    opacity: 0,
    stopPop: true,
    stopinterval: null,
    stopout: null,
    mouslive: true,
    scale: false,
    stopsetTimeoutShowPopup:null,
    stopsetTimeouthidePopup:null,
  },
  watch: {
    data: {
      deep: true,
      handler(val) {
        window.__DATA__ = val;
      },
    },
  },
  async mounted() {
    // this.animation();
    this.products = (
      await StoreinoApp.$store.search("products", {
        "_id-in": this.data.productsIds,
      })
    ).results;
    console.log("Products found", this.products);
    this.show()
  },
  computed: {},
  methods: {
    changeCentent() {
      var person = Math.floor(Math.random() * this.data.users.length);
      var city = Math.floor(Math.random() * this.data.cities.length);
      var product = Math.floor(Math.random() * this.data.productsIds.length);
      var time = Math.floor(
        Math.random() * (this.data.time.max - this.data.time.min) +
          this.data.time.min
      );
      //change name
      this.name = this.data.users[person].name;
      if (this.data.users[person].gender == "male") {
        this.buy = this.data.message.male;
      } else {
        this.buy = this.data.message.female;
      }
      // change city
      this.city = this.data.cities[city].city;

      // function search product
      this.searchProduct(this.data.productsIds[product]);
      //time achter produit
      this.time = time;
    },
    searchProduct(id) {
      this.products.map((res) => {
        if (res._id == id) {
          this.nameProduct = res.name;
          this.imagesrc =
            res.images && res.images.length > 0
              ? res.images[0].src
              : "https://storeino.b-cdn.net/assets/img/logo-sm.png";
          this.urlProduct = res.slug;
        }
      });
    },
    mouseOver() {
      clearTimeout(this.stopsetTimeoutShowPopup)
      clearTimeout(this.stopsetTimeouthidePopup)
      this.pending = false;
      console.log("hhhhhh");
    },
    mouseLeave(hide = false) {
      
      if (hide == true) {
        this.show()
        this.pending == true
        stopmouselive = true
      } 
      else {
        this.stopsetTimeoutShowPopup = setTimeout(() => {
          if (!this.pending) {
            console.log("test",stopmouselive);
            if (stopmouselive==false) {
                console.log("hide");
                this.show()
            }
            stopmouselive = false
          } 
        },2000)
      }
    },
    show() {
      this.pending=true
      if (
      this.data.positions.position == "bottom-right" ||
      this.data.positions.position == "bottom-left" ||
      this.data.positions.position == "bottom-center"
      ) {

        this.opacity = 0;
        this.transistion = "translateY(130px)";
        this.unit = this.data.time.unit;
        this.stopsetTimeoutShowPopup = setTimeout(() => {
          this.pending = false;
          this.changeCentent()
          this.transistion = "translateY(0px)";
          this.opacity = 1;
          this.stopsetTimeouthidePopup  =  setTimeout(() => {
            this.opacity = 0;
            this.transistion = "translateY(130px)";
            
            this.show();
          },this.data.inerval.alive * 1000)
        },this.data.inerval.hidden * 1000)   
      } else {
         this.opacity = 0;
        this.transistion = "translateY(-130px)";
        this.unit = this.data.time.unit;
        this.stopsetTimeoutShowPopup = setTimeout(() => {
          this.pending = false;
          this.changeCentent()
          this.transistion = "translateY(0px)";
          this.opacity = 1;
          this.stopsetTimeouthidePopup  =  setTimeout(() => {
            this.opacity = 0;
            this.transistion = "translateY(-130px)";
            this.show();
          },this.data.inerval.alive * 1000)
        },this.data.inerval.hidden * 1000)   
    }
    },
    showProduct() {
      this.scale = true;
      if (this.mouslive) {
        const event = new CustomEvent("APP_GO_TO", { detail: { url: `/products/${this.urlProduct}`}});
        window.dispatchEvent(event);
      }
    },
  },
});
