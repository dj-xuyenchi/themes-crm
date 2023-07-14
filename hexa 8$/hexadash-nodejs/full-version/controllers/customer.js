const mongoose = require('mongoose')
const customerSchema = require('../schemas/customerSchema')
const Customer = new mongoose.model('Customer', customerSchema)

// customer list page
const customers = async (request, response, next) => {
    let customers = await Customer.find()
    response.render('../views/pages/customer/list',{
        title:'Customer List',
        name:'view-all',
        customers:customers
    })
}

// customer create page
const create = (request, response, next) => {
    response.render('../views/pages/customer/create',{
        title:'Create New Customer',
        name:'create_customer'
    })
}

// store new customer
const store = async (request, response, next) => {
    let customerInfos = {
        name : request.body.name,
        email : request.body.email,
        phone : request.body.phone,
        countryOption : request.body.countryOption,
        cityOption : request.body.cityOption,
        join : request.body.join,
        company : request.body.company,
        position : request.body.position,
        status : request.body.status,
        image : request.body.image,
    }
    const customer = new Customer(customerInfos)
    await customer.save().then(()=>{
        response.redirect(process.env.BASE_URL+"customer/view-all/" + response.getLocale())
    }).catch((error)=>{
        response.render('../views/pages/customer/create',{
            title:'Create New Customer',
            name:'create_customer',
            errors:error.errors,
            input:customerInfos
        })
    })
}

// customer edit page
const edit = async (request, response, next) => {
    await Customer.findById(request.params.id).then((customer)=>{
        response.render('../views/pages/customer/edit',{
            title:'Edit Customer',
            name:'edit_customer',
            customer:customer
        })
    }).catch(error=>console.log(error))    
}

// update customer by id
const update = async (request, response, next) => {
    let customerInfos = {
        name : request.body.name,
        email : request.body.email,
        phone : request.body.phone,
        countryOption : request.body.countryOption,
        cityOption : request.body.cityOption,
        join : request.body.join,
        company : request.body.company,
        position : request.body.position,
        status : request.body.status,
        image : request.body.image,
    }
    await Customer.findByIdAndUpdate(request.params.id,customerInfos).then(()=>{        
        response.redirect(process.env.BASE_URL+"customer/view-all/" + response.getLocale())
    }).catch(error=>{
        if(error) response.redirect("/customer/edit/"+request.params.id + "/" + response.getLocale())        
    })
}

// remove customer
const remove = async (request, response, next) => {
    await Customer.findByIdAndDelete(request.params.id).then(()=>{
        response.redirect(process.env.BASE_URL+"customer/view-all/" + response.getLocale())
    }).catch(error=>console.log(error))
    
}

module.exports = {
    customers,
    create,
    store,
    edit,
    update,
    remove
}