window.addEventListener('click', myFunc);

if (document.location.href === 'https://www.dns-shop.ru/order/begin/'){
    cartClick();
}


// if (document.location.href === 'https://www.dns-shop.ru/checkout/'){
//     finishOrder('+7 985 331-21-22');
// }

async function myFunc(event) {
    return new Promise((resolve, reject) => {
        if (event.target.nodeName !== 'BUTTON'){
            reject(new Error('not in stock'));
        }

        let itemId = event.target.parentElement.parentElement.getAttribute('data-product');

        if (itemId === null){
            reject(new Error('there`s no itemId'));
        } else {
            console.log(itemId);
            resolve();
        }
    })
    .then (() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                window.location.replace('https://www.dns-shop.ru/order/begin/');
                resolve();
            }, 800);
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

function cartClick() {
    document.querySelector('.buy-button').click();
}

// function finishOrder(telephone) {
//     const event = new KeyboardEvent("keypress", {
//         view: window,
//         keyCode: 13,
//         bubbles: true,
//         cancelable: true
//     });
//     document.querySelector('.base-ui-input-row__input').value = telephone;
//     document.querySelector('.base-ui-input-row__input').dispatchEvent(event);
    //let token = getMetaData();
    // return fetch("https://www.dns-shop.ru/sms-confirm/check-phone-confirmation//?phone=" + telephone, {
    //     "headers": {
    //       "accept": "*/*",
    //       "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    //       "content-type": "application/x-www-form-urlencoded",
    //       "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\", \"Opera GX\";v=\"78\"",
    //       "sec-ch-ua-mobile": "?0",
    //       "sec-fetch-dest": "empty",
    //       "sec-fetch-mode": "cors",
    //       "sec-fetch-site": "same-origin",
    //       "x-csrf-token": token,
    //       "x-requested-with": "XMLHttpRequest"
    //     },
    //     "referrer": "https://www.dns-shop.ru/checkout/",
    //     "referrerPolicy": "strict-origin-when-cross-origin",
    //     "body": null,
    //     "method": "POST",
    //     "mode": "cors",
    //     "credentials": "include"
    //   });
// }

// function getMetaData() {
//     const metas = document.getElementsByTagName('meta');

//     for(let i = 0; i < metas.length; i++){
//         if (metas[i].getAttribute('name') === 'csrf-token') {
//             return metas[i].getAttribute('content');
//         }
//     }
// }

    // .then (() => {
    //     let btns = document.getElementsByTagName('button');
    //     for (let i = 0; i < btns.length; i++){
    //         btns[i].style['background'] = '#FF00FF';
    //         btns[i].onclick = () => {
    //             console.log('worked');
    //         };
    //     }
    // })


// fetch("https://www.dns-shop.ru/cart-service/add/", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "max-age=0",
//     "content-type": "multipart/form-data; boundary=----WebKitFormBoundarycT7onGh0JB8ULYer",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\", \"Opera GX\";v=\"78\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrf-token": "sIN_lNKGusZ1-ysJBMH953VavYczNafQ5imZLkVcG8Dy8w2tpfaPgSXNaUsxlKeoQDfo0HEHxOGJXNxXBgwrhA==",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://www.dns-shop.ru/catalog/17a8f42316404e77/kompyuternye-stoly/no-referrer",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "------WebKitFormBoundarycT7onGh0JB8ULYer\r\nContent-Disposition: form-data; name=\"ids\"\r\n\r\n7b693121-e5cd-11ea-a20f-00155df1b805\r\n------WebKitFormBoundarycT7onGh0JB8ULYer\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\n1\r\n------WebKitFormBoundarycT7onGh0JB8ULYer\r\nContent-Disposition: form-data; name=\"count\"\r\n\r\n1\r\n------WebKitFormBoundarycT7onGh0JB8ULYer\r\nContent-Disposition: form-data; name=\"additional\"\r\n\r\n{\"warrantyPeriod\":0,\"warrantyType\":0,\"relatedServices\":\"[]\",\"optionalProductGuid\":null,\"minPriceSelected\":false}\r\n------WebKitFormBoundarycT7onGh0JB8ULYer\r\nContent-Disposition: form-data; name=\"bundle\"\r\n\r\nundefined\r\n------WebKitFormBoundarycT7onGh0JB8ULYer--\r\n",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });

// fetch("https://www.dns-shop.ru/cart-service/get-data/", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "max-age=0",
//     "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryxmbbpuFYy971k7zY",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\", \"Opera GX\";v=\"78\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrf-token": "OccRI4k2mXm8yeMGjZT3D_JfLawlXOLGV2jK81SJMTd7t2Ma_kasPuz_oUS4wa1AxzJ4-2dugfc4HY-KF9kBcw==",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://www.dns-shop.ru/order/begin/no-referrer",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "------WebKitFormBoundaryxmbbpuFYy971k7zY--\r\n",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });

// fetch("https://www.dns-shop.ru/payment/payment/check-product-installment/", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "max-age=0",
//     "content-type": "multipart/form-data; boundary=----WebKitFormBoundarycIJQ3jwN6H9uvTY2",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\", \"Opera GX\";v=\"78\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-csrf-token": "-TKnke67RBI29o5QRKnjSNxkFSBD34f6y9yJVdZ3bG-7QtWomctxVWbAzBJx_LkH6QlAdwHt5MukqcwslSdcKw==",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://www.dns-shop.ru/checkout/no-referrer",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "------WebKitFormBoundarycIJQ3jwN6H9uvTY2\r\nContent-Disposition: form-data; name=\"CheckProductInstallmentLoadForm[productIds][0][0]\"\r\n\r\n7b693121-e5cd-11ea-a20f-00155df1b805\r\n------WebKitFormBoundarycIJQ3jwN6H9uvTY2--\r\n",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });







// This is what our customer data looks like.
// const customerData = [
//     { data:[{bestPriceLinks: [], bonus: 0, code: "4702299", count: 1, discountForOnlinePayment: 0, groupId: "", id: "7b693121-e5cd-11ea-a20f-00155df1b805", innerGroupId: 0, mrk: false, multiActionBonus: 0, price: 1299, title: "Стол компьютерный МФ Мастер Уно белый", type: 1}], id: 1 },
//     { data : {
//         hasDelivery: false,
//         isRsu: false,
//         needPrepay: false,
//         onlinePaymentActionType: null,
//         serviceKbtCanPayOnline: false,
//         useDiscountForOnlinePayment: false,
//         useDl: false,
//         useInstallment: false,
//         useInstantDiscount: false,
//         kpOfferId: ""},
//     id: 1
//     }
//   ];
//   const dbName = "checkout";
  
//   var request = indexedDB.open(dbName, 2);
  
//   request.onupgradeneeded = function(event) {
//     var db = event.target.result;
    
//     db.onerror = (event) => {
//         console.log('error: ' + event.target);
//     }

//     // Create an objectStore to hold information about our customers. We're
//     // going to use "ssn" as our key path because it's guaranteed to be
//     // unique.
//     var objectStore = db.createObjectStore("cart-group", { keyPath: "id" });
//     var objectStore1 = db.createObjectStore("cart-options", { keyPath: "id" });
//     var objectStore2 = db.createObjectStore("cart-group-id");
  
//     // Create an index to search customers by name. We may have duplicates
//     // so we can't use a unique index.
//     // objectStore.createIndex("name", "name", { unique: false });
  
//     // Create an index to search customers by email. We want to ensure that
//     // no two customers have the same email, so use a unique index.
//     // objectStore.createIndex("email", "email", { unique: true });
  
//     // Store values in the newly created objectStore.
//     // for (var i in customerData) {
//     //   objectStore.add(customerData[i]);
//     // }
//     objectStore.add(customerData[0]);
//     objectStore1.add(customerData[1]);
//     objectStore2.put(1, "id");
// };


