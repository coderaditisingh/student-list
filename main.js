var name_students_array=[];
function submit()
{
    var name_1=document.getElementById("N1").value;
    var name_2=document.getElementById("N2").value;
    var name_3=document.getElementById("N3").value;
    var name_4=document.getElementById("N4").value;
    var name_5=document.getElementById("N5").value;
    var name_6=document.getElementById("N6").value;

 name_students_array.push(name_1);
 name_students_array.push(name_2);
 name_students_array.push(name_3);
 name_students_array.push(name_4);
 name_students_array.push(name_5);
 name_students_array.push(name_6);
console.log(name_students_array);
document.getElementById("display_name").innerHTML=name_students_array;
document.getElementById("BSub").style.display="none";
document.getElementById("Bsort").style.display="inline-block";
    }

    function sorting(){
        name_students_array.sort();
        console.log(name_students_array);
document.getElementById("display_name").innerHTML=name_students_array;

            }
    