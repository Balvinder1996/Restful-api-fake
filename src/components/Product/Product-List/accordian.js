import { useEffect } from 'react'
import '../Product-List/accordian.scss'
const Accordion_Page = () => {
    useEffect(() => {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    })
    return (
        <>
            <button class="accordion">customer rating</button>
            <div class="panel">
               <div className="mt-10">
                   <input type="checkbox" id="5"/>
                   <lable  className="ml-10"  for="5">above 4.5</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="4"/>
                   <lable className="ml-10"  for="4">4 to 4.5</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="3"/>
                   <lable className="ml-10"  for="3">3 to 4</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="2"/>
                   <lable  className="ml-10" for="2">2.5 to 3</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="1"/>
                   <lable  className="ml-10" for="1">below 2.5</lable>
               </div>
             </div> 
             {/*according one ends here--------- */}
            <button class="accordion mt-5">Availability</button>
            <div class="panel">
               <div className="mt-10">
                   <input type="checkbox" id="5"/>
                   <lable  className="ml-10"  for="5">include out of stock</lable>
               </div>
            </div>
            {/*according two ends here--------- */}
            <button class="accordion mt-5">Discount</button>
            <div class="panel">
               <div className="mt-10">
                   <input type="checkbox" id="10%"/>
                   <lable  className="ml-10"  for="10%">10%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="15%"/>
                   <lable className="ml-10"  for="15%">15%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="20%"/>
                   <lable className="ml-10"  for="20%">20%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="30%"/>
                   <lable  className="ml-10" for="30%">30%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="50%"/>
                   <lable  className="ml-10" for="50%">50%</lable>
               </div>
            </div>
            {/* third accordian ends here */}
            <button class="accordion mt-5">Discount</button>
            <div class="panel">
               <div className="mt-10">
                   <input type="checkbox" id="10%"/>
                   <lable  className="ml-10"  for="10%">10%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="15%"/>
                   <lable className="ml-10"  for="15%">15%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="20%"/>
                   <lable className="ml-10"  for="20%">20%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="30%"/>
                   <lable  className="ml-10" for="30%">30%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="50%"/>
                   <lable  className="ml-10" for="50%">50%</lable>
               </div>
            </div>
            {/* accordian four ends here */}
            <button class="accordion mt-5">Discount</button>
            <div class="panel">
               <div className="mt-10">
                   <input type="checkbox" id="10%"/>
                   <lable  className="ml-10"  for="10%">10%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="15%"/>
                   <lable className="ml-10"  for="15%">15%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="20%"/>
                   <lable className="ml-10"  for="20%">20%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="30%"/>
                   <lable  className="ml-10" for="30%">30%</lable>
               </div>
               <div className="mt-5">
                   <input type="checkbox" id="50%"/>
                   <lable  className="ml-10" for="50%">50%</lable>
               </div>
            </div>
        </>
    )
}
export default Accordion_Page