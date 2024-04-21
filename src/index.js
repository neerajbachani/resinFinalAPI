const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()


app.use(bodyParser.json());
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=> {
    return res.status(200).send({message: "helo ji", status: true})
})

app.get('/keep-alive', (req, res) => {
    res.status(200).send('OK');
  });
  
  // Set up the background task to call the keep-alive endpoint every 10 minutes
  setInterval(() => {
    const appUrl = `https://resinfinalapi.onrender.com/keep-alive`;
    axios.get(appUrl)
      .then(response => {
        console.log('Keep-alive request successful');
      })
      .catch(error => {
        console.error('Keep-alive request failed:', error);
      });
  }, 60000);

const authRouters = require("./routes/authRoute")
app.use('/auth',authRouters)

const userRouters = require("./routes/userRoute")
app.use('/api/users',userRouters)

const mailRouters = require("./routes/mailRoute")
app.use('/api', mailRouters)

const productRouter = require("./routes/productRoute")
app.use('/api/products', productRouter)

const adminProductRouter = require("./routes/adminProductsRoute")
app.use('/api/admin/products', adminProductRouter)

const heroSectionRouter = require("./routes/heroSectionRoute")
app.use('/api', heroSectionRouter)

const galleryRouter = require("./routes/galleryRoute")
app.use('/api', galleryRouter)

const contactRouter = require("./routes/contactRoute")
app.use('/api', contactRouter)

const cartRouter = require("./routes/cartRoute")
app.use('/api/cart', cartRouter)

const cartItemRouter = require("./routes/cartItemsRoute")
app.use('/api/cart_items', cartItemRouter)

const orderRouter = require("./routes/orderRoute")
app.use('/api/orders', orderRouter)

const adminOrderRouter = require("./routes/adminOrderRoute")
app.use('/api/admin/orders', adminOrderRouter)

const reviewRouter = require("./routes/reviewRoute")
app.use('/api/reviews', reviewRouter)

const ratingRouter = require("./routes/ratingRoute")
app.use('/api/ratings', ratingRouter)

const paymentRouter = require("./routes/paymentRoute")
app.use("/api/payments", paymentRouter)

module.exports = app;
