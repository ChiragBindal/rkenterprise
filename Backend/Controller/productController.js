const Product = require('../Model/productModel');
const features = require('../UtilsRk/features');
const catchAsync = require('../UtilsRk/catchAsync');

exports.getAllProduct = catchAsync(async(req , res , next) =>{

    const newFeatures = new features(Product.find() , req.query)
                            .filter()
                            .sort()
                            .limitFields()
                            .paginate();
    const products = await newFeatures.query;


        res.status(200).json({
            status : 'success',
            results : products.length,
            data : {
                products
            }
        })
   
});

exports.getOneProduct = catchAsync( async(req , res , next)=>{
    const product  =  await Product.findById(req.params.id);

    res.status(200).json({
        status : 'success',
        data : {
            product
        }
    })
});

exports.createProduct = catchAsync( async (req , res , next)=>{
    const newProduct = await Product.create(req.body);

    res.status(201).json({
        status : 'success',
        data : {
            product : newProduct
        }
    })
});

exports.updateProduct = catchAsync( async (req , res , next)=>{
   const updatedProduct = await Product.findByIdAndUpdate(req.params.id  , req.body , {
       new : true,
       runValidators : true
   });
   
   res.status(200).json({
       status : 'success',
       data : {
           product : updatedProduct
       }
   })
});

exports.deleteProduct = catchAsync( async (req , res, next)=>{
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status : 'success',
        data : null
    })
})

exports.getProductCategory = catchAsync( async (req , res , next)=>{
    const product = await Product.aggregate([
        {
            $unwind : '$category'
        },
        {
            $group : {
                _id : {$toUpper : '$ctegory'}
            }
        }
    ]);
    res.status(200).json({
        status : 'success',
        data : {
            product
        }
    })
})