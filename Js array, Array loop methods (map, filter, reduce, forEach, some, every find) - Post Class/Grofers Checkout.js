<!--- HTML PART --->
<table>        
        <tr>
            <td>1</td>
            <td>Item-2</td>
            <td data-ns-test="price">18361</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Item-2</td>
            <td data-ns-test="price">18361</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Item-3</td>
            <td data-ns-test="price">17373</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Item-4</td>
            <td data-ns-test="price">17361</td>
        </tr>
    </table>


<!--- JS PART ---->
let x = document.getElementsByTagName('table')[0];
let x1 = document.createElement('tr');
let x2 = document.createElement('td');
let x3 = document.createElement('td');
let x4 = document.createElement('td');
x4.setAttribute("data-ns-test","grandTotal");
let pricetotal = document.querySelectorAll("[data-ns-test='price']");
let sum = 0;
for(let i=0;i<pricetotal.length;i++){
    sum+=parseInt(pricetotal[i].innerHTML);
}
x2.innerHTML = 5;
x3.innerHTML = "Item-5";
x4.innerHTML = sum;
x1.appendChild(x2);
x1.appendChild(x3);
x1.appendChild(x4);
x.appendChild(x1);