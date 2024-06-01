window.onload = function () {

    //the url fetch and slicing is done
    let main_url = window.location.href;
    let desc = "description/";

    let test_url;
    if (main_url.endsWith(desc)) {
        test_url = main_url.slice(0, -12);
    } else {
        test_url = main_url;
    }

    console.log(test_url + " Captured testurl");

    function convertToArray() {
        const element_obj = document.getElementsByTagName('a');
        const element_list = [...(element_obj)];
        return element_list;
    }

    setTimeout(() => {
        let element_list = convertToArray();

        for (let i = 0; i < element_list.length; i++) {
            if(element_list[i].href === test_url) {
                title_object = element_list[i];
                //we featched title object the starting point node of our traversal
                break;
            }
        }

        //obtaining parents
        if (title_object) {
            let super_parent = title_object.parentNode.parentNode.parentNode;
            super_parent.id = "super_parent";

            let difficulty = super_parent.parentNode.childNodes[1].childNodes[0].innerHTML;

            //making and injecting node
            let prepare_element = document.createElement("div");
            prepare_element.id = "new_box";
            prepare_element.className = "flex h-full mx-2 justify-center items-center bg-white rounded-full z-50";
            super_parent.childNodes[1].appendChild(prepare_element);

            let prepare_clock = document.createElement('span');
            prepare_clock.innerHTML = "00:00";
            prepare_clock.className = "px-2 py-1 text-black text-center";
            document.getElementById('new_box').appendChild(prepare_clock);


        } else {
            console.error("title_object is " + typeof title_object);
        }

    }, 4000);
}