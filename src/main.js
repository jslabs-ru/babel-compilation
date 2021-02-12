(async function () {
    let a = await new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('DONE');
        }, 1000);

        let err = true;
        if(err) {
            console.error('Error!');
        }
    })

    console.log(a);
})()
