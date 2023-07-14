// dashboard demo one page
const index = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_one',{
        title:'Demo One',
        name:'demo_one'
    })
}

// dashboard demo two page
const demoTwo = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_two',{
        title:'Demo Two',
        name:'demo_two'
    })
}

// dashboard demo three page
const demoThree = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_three',{
        title:'Demo Three',
        name:'demo_three'
    })
}

// dashboard demo four page
const demoFour = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_four',{
        title:'Demo Four',
        name:'demo_four'
    })
}

// dashboard demo five  page
const demoFive = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_five',{
        title:'Demo Five',
        name:'demo_five'
    })
}

// dashboard demo five  page
const demoSix = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_six',{
        title:'Demo Six',
        name:'demo_six'
    })
}

// dashboard demo five  page
const demoSeven = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_seven',{
        title:'Demo Seven',
        name:'demo_seven'
    })
}

// dashboard demo five  page
const demoEight = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_eight',{
        title:'Demo Eight',
        name:'demo_eight'
    })
}

// dashboard demo five  page
const demoNine = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_nine',{
        title:'Demo Nine',
        name:'demo_nine'
    })
}

// dashboard demo five  page
const demoTen = (request, response, next) => {
    response.render('../views/pages/dashboard/demo_ten',{
        title:'Demo Ten',
        name:'demo_ten'
    })
}

module.exports = {
    index,
    demoTwo,
    demoThree,
    demoFour,
    demoFive,
    demoSix,
    demoSeven,
    demoEight,
    demoNine,
    demoTen,
    demoFive,
}