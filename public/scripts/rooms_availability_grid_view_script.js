/*var rooms_availability = [
    {
        room_id: "",
        room_number: "",
        days: [
            {
                date: 21,
                classes: [
                    "css class"
                ]
            }
        ]
    }
]*/

var make_reservation_guests_list = document.getElementById("make_reservation_guests_list");

function add_a_guest_obj(type){
    return {
        id: 0,
        profile_pic: "",
        first_name: "",
        last_name: "",
        type: type,
        age: 0,
        DOB: "",
        gender: "Male",
        price_paid: 0,
    }
}

let global_guests_array_index_position = 0;
let global_guests_array_date_index_position = 0;

function make_guests_list_from_number_input_values(adult_iput_fld, child_input_fld, initial){

    global_guests_array_index_position = 0;
    global_guests_array_date_index_position = 0;

    make_reservation_guests_list.innerHTML = "";
    make_reservations_post_data.guests = [];

    let number_of_adults = document.getElementById(adult_iput_fld).value;
    let number_of_children = document.getElementById(child_input_fld).value;
    let remainder = {
        adults: 0,
        children: 0
    }

    if(make_reservations_post_data.current_room.capacitance.adults < number_of_adults){
        remainder.adults = (number_of_adults - make_reservations_post_data.current_room.capacitance.adults);
        number_of_adults = make_reservations_post_data.current_room.capacitance.adults;
    }

    if(make_reservations_post_data.current_room.capacitance.children < number_of_children){
        remainder.children = (number_of_children - make_reservations_post_data.current_room.capacitance.children);
        number_of_children = make_reservations_post_data.current_room.capacitance.children;
    }

    if(initial){
        document.getElementById("make_reservation_popup_number_Of_adults_input").value = number_of_adults;
        document.getElementById("make_reservation_popup_number_Of_children_input").value = number_of_children;
    }

    let children_text_display = number_of_children > 1 ? ` ${number_of_children} Children` : ` ${number_of_children} Child`;
    let adults_text_display = number_of_adults > 1 ? `${number_of_adults} Adults` : `${number_of_adults} Adult`;

    let remainder_children_text_display = remainder.adults > 1 ? `${remainder.adults} adults` : `${remainder.adults} adult`;
    let remainder_adults_text_display = remainder.children > 1 ? `${remainder.children} children` : `${remainder.children} child`;
    let reaminder_guests_text_display = (remainder.children + remainder.adults) > 1 ? `${(remainder.children + remainder.adults)} guests` : `${(remainder.children + remainder.adults)} guest`;

    if(remainder.children > 0 && remainder.adults > 0){
        document.getElementById("make_reservation_number_guests_display_p").innerHTML = `
            <p style="color: white; font-size: 13px; margin: 10px 0; letter-spacing: 1px;"><span style="color:rgb(255, 97, 6); font-size: 13px; margin-right: 5px;">Guests(s)</span>
            ${adults_text_display},${children_text_display}</p>
            <div style="font-size: 13px; display: flex; flex-direction: row !important; background-color: rgba(0,0,0,0.4); margin-top: 5px; border-radius: 4px; padding: 10px; justify-content: center;">
                <p style="padding-right: 5px;">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color: orangered;"></i></p>
                <p style="color: white; font-size: 13px;  margin-left: 5px;">
                All guests cant go in room ${make_reservations_post_data.current_room.number}. You may later add additional rooms 
                for remaining ${reaminder_guests_text_display}</p>
            </div>
        `;
        document.getElementById("make_reservation_popup_number_Of_adults_input").style.backgroundColor = "rgb(255,120,120)";
        document.getElementById("make_reservation_popup_number_Of_children_input").style.backgroundColor = "rgb(255,120,120)";
    }else if(remainder.adults > 0){
        document.getElementById("make_reservation_number_guests_display_p").innerHTML = `
            <p style="color: white; font-size: 13px; margin: 10px 0; letter-spacing: 1px;"><span style="color:rgb(255, 97, 6); font-size: 13px; margin-right: 5px;">Guests(s)</span>
            ${adults_text_display},${children_text_display}</p>
            <div style="font-size: 13px; display: flex; flex-direction: row !important; background-color: rgba(0,0,0,0.4); margin-top: 5px; border-radius: 4px; padding: 10px; justify-content: center;">
                <p style="padding-right: 5px;">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color: orangered;"></i></p>
                <p style="color: white; font-size: 13px; margin-left: 5px;">All adults cant go in room ${make_reservations_post_data.current_room.number}. You may later add additional rooms 
                for remaining ${remainder_children_text_display}</p>
            </div>
        `;
        document.getElementById("make_reservation_popup_number_Of_adults_input").style.backgroundColor = "rgb(255,120,120)";
        document.getElementById("make_reservation_popup_number_Of_children_input").style.backgroundColor = "rgb(255,255,255)";
    }else if(remainder.children > 0){
        document.getElementById("make_reservation_number_guests_display_p").innerHTML = `
            <p style="color: white; font-size: 13px; margin: 10px 0; letter-spacing: 1px;"><span style="color:rgb(255, 97, 6); font-size: 13px; margin-right: 5px;">Guests(s)</span>
            ${adults_text_display},${children_text_display}</p>
            <div style="font-size: 13px; display: flex; flex-direction: row !important; background-color: rgba(0,0,0,0.4); margin-top: 5px; border-radius: 4px; padding: 10px; justify-content: center;">
                <p style="padding-right: 5px;">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color: orangered;"></i></p>
                <p style="color: white; font-size: 13px; margin-left: 5px;">All children cant go in room ${make_reservations_post_data.current_room.number}. You may later add additional rooms 
                for remaining ${remainder_adults_text_display}</p>
            </div>
        `;
        document.getElementById("make_reservation_popup_number_Of_children_input").style.backgroundColor = "rgb(255,120,120)";
        document.getElementById("make_reservation_popup_number_Of_adults_input").style.backgroundColor = "rgb(255,255,255)";
    }else{
        document.getElementById("make_reservation_number_guests_display_p").innerHTML = `
            <p style="color: white; font-size: 13px; margin: 10px 0; letter-spacing: 1px;"><span style="color:rgb(255, 97, 6); font-size: 13px; margin-right: 5px;">Guests(s)</span>
            ${adults_text_display},${children_text_display}</p>
        `; 
        document.getElementById("make_reservation_popup_number_Of_adults_input").style.backgroundColor = "rgb(255,255,255)";
        document.getElementById("make_reservation_popup_number_Of_children_input").style.backgroundColor = "rgb(255,255,255)";
    }

    for(let i=0; i<number_of_adults; i++){
        make_reservations_post_data.guests.push(add_a_guest_obj("adult"));
        make_reservation_guests_list.innerHTML += make_reservation_return_each_adult_guest_markup(i, global_guests_array_index_position);
        setTimeout(()=>{
            reservation_bind_guest_dob_chooser("adult", `mk_reservationS_adult_DOB_input_${i}`, global_guests_array_date_index_position);
            global_guests_array_date_index_position++
        }, 10);
        global_guests_array_index_position++;
    }

    for(let i=0; i<number_of_children; i++){
        make_reservations_post_data.guests.push(add_a_guest_obj("children"));
        make_reservation_guests_list.innerHTML += make_reservation_return_each_child_guest_markup(i, global_guests_array_index_position);
        setTimeout(()=>{
            reservation_bind_guest_dob_chooser("children", `mk_reservationS_child_DOB_input_${i}`, global_guests_array_date_index_position);
            global_guests_array_date_index_position++
        }, 10);
        global_guests_array_index_position++;
    }

}

//add guest information inputs onchange functions
function add_a_guest_first_name(input, index){
    make_reservations_post_data.guests[index].first_name = document.getElementById(input).value
}
function add_a_guest_last_name(input, index){
    make_reservations_post_data.guests[index].last_name = document.getElementById(input).value
}
function add_a_guest_gender(input, index){
    make_reservations_post_data.guests[index].gender = document.getElementById(input).value
}
function add_a_guest_DOB(input, index, type){

    /*if(type === "adult"){
        room_booking_enforce_adult_age_input(input);
    }else{
        room_booking_enforce_child_age_input(input);
    }*/

    make_reservations_post_data.guests[index].DOB = document.getElementById(input).value
}

function make_reservation_return_each_adult_guest_markup(number, index){
    return `
        <div class="each_room_reservation_guest" style="background-color: #37a0f5; padding: 10px; margin-bottom: 10px; border-radius: 4px;">
            <p style="font-size: 14px; font-weight: bolder; color:rgb(167, 2, 2); letter-spacing: 1px;">Adult ${number + 1}</p>
            <div class="flex_row_default_flex_column_mobile">
                <div class="flex_child_of_two">
                    <div style="margin-top: 10px;">
                        <p style="color: white; font-weight: bolder; font-size: 13px; margin-bottom: 10px;">First Name:</p>
                        <input id="mk_reservationS_adult_first_name_input_${number}" onchange="add_a_guest_first_name('mk_reservationS_adult_first_name_input_${number}', ${index});" style="font-size: 14px; padding: 10px; border: none; border-radius: 4px; width: calc(100% - 20px);" type="text" placeholder="add first name here"/>
                    </div>
                    <div style="margin-top: 20px;">
                        <p style="color: white; font-weight: bolder; font-size: 13px; margin-bottom: 10px;">Last Name:</p>
                        <input id="mk_reservationS_adult_last_name_input_${number}" onchange="add_a_guest_last_name('mk_reservationS_adult_last_name_input_${number}', ${index});" style="font-size: 14px; padding: 10px; border: none; border-radius: 4px; width: calc(100% - 20px);" type="text" placeholder="add last name here"/>
                    </div>
                </div>
                <div class="flex_child_of_two flex_non_first_child">
                    <div style="margin-top: 10px;">
                        <p style="color: white; font-weight: bolder; font-size: 13px; margin-bottom: 10px;">
                            Gender</p>
                        <select id="mk_reservationS_adult_gender_input_${number}" onchange="add_a_guest_gender('mk_reservationS_adult_gender_input_${number}', ${index});" style="font-size:  14px; padding: 10px; border: none; border-radius: 4px; width: 100%;">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <div style="margin-top: 20px;">
                            <p style="color: white; font-weight: bolder; font-size: 13px; margin-bottom: 10px;">
                                Date Of Birth: <span style="color:rgba(0, 0, 0, 0.705); font-size: 13px;">(above 17)</span></p>
                            <input id="mk_reservationS_adult_DOB_input_${number}" style="font-size:  14px; padding: 10px; border: none; border-radius: 4px; width: calc(100% - 20px);" type="text" placeholder="YYYY-MM-DD eg. 1992-03-23"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function make_reservation_return_each_child_guest_markup(number, index){
    return `
        <div class="each_room_reservation_guest" style="background-color: #37a0f5; padding: 10px; margin-bottom: 10px; border-radius: 4px;">
            <p style="font-size: 14px; font-weight: bolder; color:rgb(167, 2, 2); letter-spacing: 1px;">Child ${number + 1}</p>
            <div class="flex_row_default_flex_column_mobile">
                <div class="flex_child_of_two">
                    <div style="margin-top: 10px;">
                        <p style="color: white; font-weight: bolder; font-size: 13px; margin-bottom: 10px;">First Name:</p>
                        <input id="mk_reservationS_child_first_name_input_${number}" onchange="add_a_guest_first_name('mk_reservationS_child_first_name_input_${number}', ${index});" style="font-size:  14px; padding: 10px; border: none; border-radius: 4px; width: calc(100% - 20px);" type="text" placeholder="add first name here"/>
                    </div>
                    <div style="margin-top: 20px;">
                        <p style="color: white; font-weight: bolder; font-size: 13px; margin-bottom: 10px;">Last Name:</p>
                        <input id="mk_reservationS_child_last_name_input_${number}" onchange="add_a_guest_last_name('mk_reservationS_child_last_name_input_${number}', ${index});" style="font-size:  14px; padding: 10px; border: none; border-radius: 4px; width: calc(100% - 20px);" type="text" placeholder="add last name here"/>
                    </div>
                </div>
                <div class="flex_child_of_two flex_non_first_child">
                    <div style="margin-top: 10px;">
                        <p style="color: white; font-weight: bolder; font-size: 13px; margin-bottom: 10px;">
                            Gender</p>
                        <select id="mk_reservationS_child_gender_input_${number}" onchange="add_a_guest_gender('mk_reservationS_child_gender_input_${number}', ${index});" style="font-size:  14px; padding: 10px; border: none; border-radius: 4px; width: 100%;">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <div style="margin-top: 20px;">
                            <p style="color: white; font-weight: bolder; font-size: 13px; margin-bottom: 10px;">
                                Date Of Birth: <span style="color:rgba(0, 0, 0, 0.705); font-size: 13px;">(below 18)</span></p>
                            <input id="mk_reservationS_child_DOB_input_${number}" style="font-size:  14px; padding: 10px; border: none; border-radius: 4px; width: calc(100% - 20px);" type="text" placeholder="YYYY-MM-DD eg. 1992-03-23"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

rooms_grid_view_config.calendar.first = convert_date_object_to_db_string_format(todays_date);
rooms_grid_view_config.picked_dates.checkin = convert_date_object_to_db_string_format(todays_date);
rooms_grid_view_config.picked_dates.checkout = convert_date_object_to_db_string_format(todays_date);
make_reservations_post_data.checkin_date = convert_date_object_to_db_string_format(todays_date);
make_reservations_post_data.checkout_date = convert_date_object_to_db_string_format(todays_date);
make_reservations_post_data.all_dates_of_occupancy.push(convert_date_object_to_db_string_format(todays_date));
rooms_grid_view_config.calendar.last = convert_date_object_to_db_string_format(new Date(todays_date.setDate(todays_date.getDate() + 7)));


function add_trailing_to_date_num(number){

    let string_rep = number + "";

    if(string_rep.length > 1 && string_rep[string_rep.length - 2] === "1"){
        string_rep += "th";
    }else{

        if(string_rep[string_rep.length - 1] === "1"){
            string_rep += "st";
        }else if(string_rep[string_rep.length - 1] == "2"){
            string_rep += "nd";
        }else if(string_rep[string_rep.length - 1] == "3"){
            string_rep += "rd";
        }else {
            string_rep += "th";
        }
        
    }

    return string_rep;

}

function build_dates_list_from_range(first_date, last_date){

    let the_year = first_date.split("-")[0];
    let the_month = first_date.split("-")[1];
    let the_day = first_date.split("-")[2];

    let the_year2 = last_date.split("-")[0];
    let the_month2 = last_date.split("-")[1];
    let the_day2 = last_date.split("-")[2];

    //let startDate = new Date(`${the_year}/${the_month}/${the_day}`);
    let endDate = new Date(`${the_year2}/${the_month2}/${the_day2}`);

    let startDate = new Date(first_date);
    /*let endDate = new Date(last_date);

    //endDate = new Date(endDate.setDate(endDate.getDate() + 1));*/

    let currentDate = startDate;
    let datesList = [];

    while(endDate > currentDate){
        
        let each_date = {
            full_date: currentDate,
            classes: []
        }
        datesList.push(each_date);

        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));

    }

    return datesList;
}

function bind_dates_to_rooms(rooms_list, dates_list){

    let rooms_with_dates = rooms_list.map( each => {
        return {
            the_room: each,
            days: _.cloneDeep(dates_list)
        }
    });

    //console.log(rooms_with_dates)
    return rooms_with_dates;
}

async function add_classes_to_rooms_with_dates(rooms_with_dates){

    for(let w=0; w<rooms_with_dates.length; w++){
        
        for(let y=0; y<rooms_with_dates[w].days.length; y++){
            await check_if_date_is_booked(rooms_with_dates[w].days[y].full_date, rooms_with_dates[w].the_room._id, rooms_with_dates[w].the_room.room_number, rooms_with_dates[w].days[y]);
        }
    }

}

async function add_classes_to_current_rooms_with_dates(current_room, checking_checkout_dates_list){
    for(let y=0; y<current_room.days.length; y++){
        await check_if_date_is_booked_for_current_room(current_room.days[y].full_date, current_room.the_room._id, current_room.the_room.room_number, current_room.days[y], checking_checkout_dates_list);
    }
}

function show_selected_dates_on_selected_room(dates_list, selected_room){
    
    for(let j=0; j<selected_room.days.length; j++){
        
        if((selected_room.days[j].full_date.getDate() + ", " + selected_room.days[j].full_date.getMonth()) === dates_list[0]){

            for(let i=0; i<dates_list.length; i++){
                
                if(i === 0){
                    selected_room.days[j].classes.push("first_available");
                }
                if(i === (dates_list.length-1)){
                    selected_room.days[j].classes.push("last_available");
                }
                selected_room.days[j].classes.push("selected_day");
                j++;
            }
            break;
        }
    }

    return selected_room;
}

function check_if_date_is_booked_for_current_room(date, room_id, room_number, day, checking_checkout_dates_list){

    let the_date = convert_date_object_to_db_string_format(date);
    //console.log(date, ", ", the_date)

    return $.ajax({
        type: "GET",
        url: `/is_room_booked_on_a_certain_date/${the_date}/${room_id}/${room_number}`,
        success: res => {
            
            if(res.isBooked){
                day.classes.push("booked_date");
                for(let e=0; e<checking_checkout_dates_list.length; e++){
                    if((day.full_date.getDate() + ", " + day.full_date.getMonth()) === checking_checkout_dates_list[e]){
                        day.classes.push("overlap");
                        is_there_overlap = true;
                    }
                }
            }
            if(res.isChekin){
                day.classes.push("booked_checkin");
                if(res.all_dates_of_occupancy.length === 1){
                    day.classes.push("booked_checkout");
                }
                for(let e=0; e<checking_checkout_dates_list.length; e++){
                    if((day.full_date.getDate() + ", " + day.full_date.getMonth()) === checking_checkout_dates_list[e]){
                        day.classes.push("overlap");
                        is_there_overlap = true;
                    }
                }
            }
            if(res.isCheckout){
                day.classes.push("booked_checkout");
                for(let e=0; e<checking_checkout_dates_list.length; e++){
                    if((day.full_date.getDate() + ", " + day.full_date.getMonth()) === checking_checkout_dates_list[e]){
                        day.classes.push("overlap");
                        is_there_overlap = true;
                    }
                }
            }
        },
        error: err => {
            console.log(err);
            return err;
        }
    });
    
}

function check_if_date_is_booked(date, room_id, room_number, day){

    let the_date = convert_date_object_to_db_string_format(date);

    return $.ajax({
        type: "GET",
        url: `/is_room_booked_on_a_certain_date/${the_date}/${room_id}/${room_number}`,
        success: res => {
            
            if(res.isBooked){
                day.classes.push("booked_date");
            }
            if(res.isChekin){
                day.classes.push("booked_checkin");
                if(res.all_dates_of_occupancy.length === 1){
                    day.classes.push("booked_checkout");
                }
            }
            if(res.isCheckout){
                day.classes.push("booked_checkout");
            }
        },
        error: err => {
            console.log(err);
            return err;
        }
    });
    
}

//check_if_date_is_booked("2021-03-21", "608e686c0f7f315e84e62c9c")

function return_bookings_grid_view_headers(grid_dates_list, checking_checkout_dates_list){
    
    let tr_tag = "<td></td>";

    for(let i=0; i<grid_dates_list.length; i++){
        if(checking_checkout_dates_list.includes(grid_dates_list[i].full_date.getDate() + ", " + grid_dates_list[i].full_date.getMonth())){
            tr_tag += `<td class="date_day_picked">${add_trailing_to_date_num(grid_dates_list[i].full_date.getDate())}</td>`;
        }else{
            tr_tag += `<td>${add_trailing_to_date_num(grid_dates_list[i].full_date.getDate())}</td>`;
        }
    }

    return tr_tag;

}

function return_bookings_grid_view_current_room_markup(current_room){

    let tr_tag = `<td style="border-right: 5px solid rgba(0, 0, 0, 0.6); color: rgb(95, 96, 225); font-weight: bolder; font-size: 17px; border-left: 3px solid rgb(95, 96, 225) !important; padding-left: 10px;">
    ${current_room.the_room.room_number}</td>`;

    for(let i=0; i<current_room.days.length; i++){
        
        if(current_room.days[i].classes.includes("booked_checkin") || current_room.days[i].classes.includes("first_available")
        || current_room.days[i].classes.includes("booked_checkout") || current_room.days[i].classes.includes("last_available")){
            tr_tag += `<td class="${current_room.days[i].classes.join(" ")}">
                            ${add_trailing_to_date_num(current_room.days[i].full_date.getDate())}
                        </td>`;
        }else{
            tr_tag += `<td class="${current_room.days[i].classes.join(" ")}"></td>`;
        }
        
    }

    return tr_tag;

}



function return_bookings_grid_view_other_rooms_markup(rooms_list, current_room){

    let all_room_trs = "";

    for(let k=0; k< rooms_list.length; k++){

        if(rooms_list[k].the_room._id === current_room.the_room._id){
            continue;
        }

        let tr_tag = `<tr><td style="border-left: 3px solid rgba(255, 255, 225, 0.7) !important; color: rgba(255, 255, 225, 0.7); font-weight: bolder; padding-left: 10px;">${rooms_list[k].the_room.room_number}</td>`;

        for(let i=0; i<rooms_list[k].days.length; i++){
            
            if(rooms_list[k].days[i].classes.includes("booked_checkin") || rooms_list[k].days[i].classes.includes("first_available")
            || rooms_list[k].days[i].classes.includes("booked_checkout") || rooms_list[k].days[i].classes.includes("last_available")){
                tr_tag += `<td class="${rooms_list[k].days[i].classes.join(" ")}">
                                ${add_trailing_to_date_num(rooms_list[k].days[i].full_date.getDate())}
                            </td>`;
            }else{
                tr_tag += `<td class="${rooms_list[k].days[i].classes.join(" ")}"></td>`;
            }
            
        }

        tr_tag += "</tr>";

        all_room_trs += tr_tag;

    }

    return all_room_trs;

}

async function generate_and_display_grid_view_bookings(){

    is_there_overlap = false;

    document.getElementById("room_availability_grid_view_tbody").innerHTML = `
        <div style="width: 100%; text-align: center; padding: 20px 0;" class="loader loader--style2" title="1">
            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="orangered" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
            <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
            </path>
            </svg>
            <p style="text-align: center; font-size: 14px; color:white;">
            loading...
            </p>
        </div>
    `;

    make_reservations_post_data.property_id = document.getElementById("make_reservation_property_select").value;
    let room = await get_and_return_hotel_room_by_id(document.getElementById("make_reservation_room_select").value);
    make_reservations_post_data.rooms = [];
    make_reservations_post_data.rooms.push({
        id: document.getElementById("make_reservation_room_select").value,
        number: room.room_number,
    });
    make_reservations_post_data.price_paid = room.price;

    //YYYY-MM-DD -YYYY-MM-DDTHH:MM:SS
    let dates_list = build_dates_list_from_range(rooms_grid_view_config.calendar.first, rooms_grid_view_config.calendar.last);
    let checking_checkout_dates_list = build_dates_list_from_range(rooms_grid_view_config.picked_dates.checkin, rooms_grid_view_config.picked_dates.checkout);

    make_reservations_post_data.all_dates_of_occupancy = [];
    for(let k=0; k<checking_checkout_dates_list.length; k++){
        make_reservations_post_data.all_dates_of_occupancy.push(convert_date_object_to_db_string_format(checking_checkout_dates_list[k].full_date));
    }

    checking_checkout_dates_list = checking_checkout_dates_list.map(each => {
        return each.full_date.getDate() + ", " + each.full_date.getMonth();
    });
    
    let current_room = await get_and_return_hotel_room_by_id(rooms_grid_view_config.rooms_id);
    let rooms_list = await get_and_return_cheap_hotel_rooms_by_property_id(rooms_grid_view_config.property_id);

    rooms_list = await bind_dates_to_rooms(rooms_list, dates_list)

    current_room = {
        the_room: current_room,
        days: _.cloneDeep(dates_list)
    }
    current_room = show_selected_dates_on_selected_room(checking_checkout_dates_list, current_room)

    await add_classes_to_current_rooms_with_dates(current_room, checking_checkout_dates_list);
    await add_classes_to_rooms_with_dates(rooms_list);

    document.getElementById("room_availability_grid_view_tbody").innerHTML = `
        <tr id="room_availability_grid_view_headers">                              
        </tr>
        <tr id="room_availability_grid_view_focused_on_room" class="focused_on_room">
        </tr>
    `;

    document.getElementById("room_availability_grid_view_headers").innerHTML = return_bookings_grid_view_headers(dates_list, checking_checkout_dates_list);
    document.getElementById("room_availability_grid_view_focused_on_room").innerHTML = return_bookings_grid_view_current_room_markup(current_room);
    document.getElementById("room_availability_grid_view_tbody").innerHTML += return_bookings_grid_view_other_rooms_markup(rooms_list, current_room);

    //console.log(rooms_list)
    //console.log(current_room)

    /*for(let i=0; i < dates_list.length; i++){
        console.log(dates_list[i].full_date.getDate());
    }*/
}

document.getElementById("make_reservation_room_select").addEventListener("change", async e => {

    rooms_grid_view_config.rooms_id = document.getElementById("make_reservation_room_select").value;

    let room = await get_and_return_hotel_room_by_id(rooms_grid_view_config.rooms_id);
    make_reservations_post_data.current_room.capacitance.adults = room.guest_capacitance.adults;
    make_reservations_post_data.current_room.capacitance.children = room.guest_capacitance.children;
    make_reservations_post_data.current_room.id = room._id;
    make_reservations_post_data.current_room.number = room.room_number;

    make_guests_list_from_number_input_values('make_reservation_popup_number_Of_adults_input', 'make_reservation_popup_number_Of_children_input', false);
    toggle_show_make_reservation_find_spot_pane();
    generate_and_display_grid_view_bookings();

});

document.getElementById("make_reservation_property_select").addEventListener("change", async e => {

    document.getElementById("make_reservation_room_select").innerHTML = '';

    let rooms = await get_and_return_cheap_hotel_rooms_by_property_id(document.getElementById("make_reservation_property_select").value);
    for(let i=0; i < rooms.length; i++){
        document.getElementById("make_reservation_room_select").innerHTML += `
            <option value='${rooms[i]._id}'>${rooms[i].room_number}</option>
        `; 
    }
    
    rooms_grid_view_config.property_id = document.getElementById("make_reservation_property_select").value;
    rooms_grid_view_config.rooms_id = document.getElementById("make_reservation_room_select").value;

    make_reservations_post_data.property_id = rooms_grid_view_config.property_id;
    let room = await get_and_return_hotel_room_by_id(rooms_grid_view_config.rooms_id);
    make_reservations_post_data.rooms = [];
    make_reservations_post_data.rooms.push({
        id: rooms_grid_view_config.rooms_id,
        number: room.room_number,
    });
    make_reservations_post_data.current_room.capacitance.adults = room.guest_capacitance.adults;
    make_reservations_post_data.current_room.capacitance.children = room.guest_capacitance.children;
    make_reservations_post_data.current_room.id = room._id;
    make_reservations_post_data.current_room.number = room.room_number;
    make_reservations_post_data.price_paid = room.price;

    make_guests_list_from_number_input_values('make_reservation_popup_number_Of_adults_input', 'make_reservation_popup_number_Of_children_input', false);
    toggle_show_make_reservation_find_spot_pane();
    generate_and_display_grid_view_bookings();

});

$(function() {
    $('#make_reservation_date_range_on_popup_input').daterangepicker({
      opens: 'left',
      locale: {
        cancelLabel: 'Clear'
      }
    }, function(start, end, label) {
  
      setTimeout(()=>{
        document.getElementById("make_reservation_date_range_on_popup_input").value = start.toString().substring(0,11) +"  -  "+ end.toString().substring(0,11);
      }, 100);
  
      rooms_grid_view_config.calendar.first = start.format('YYYY-MM-DD');
      rooms_grid_view_config.calendar.last = end.format('YYYY-MM-DD');

      generate_and_display_grid_view_bookings();

      //fligh_search_data.departure_date = start.format('YYYY-MM-DD');
      //fligh_search_data.return_date = end.format('YYYY-MM-DD');
  
      //window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
  
      //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

$(function() {
    $('#make_reservation_date_range_on_popup_chekin_checkout_input').daterangepicker({
      opens: 'left',
      locale: {
        cancelLabel: 'Clear'
      }
    }, function(start, end, label) {
  
      setTimeout(()=>{
        document.getElementById("make_reservation_date_range_on_popup_input").value = start.toString().substring(0,11) +"  -  "+ end.toString().substring(0,11);
        document.getElementById("make_reservation_date_range_on_popup_chekin_checkout_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
      }, 100);
  
      rooms_grid_view_config.picked_dates.checkin = start.format('YYYY-MM-DD');
      rooms_grid_view_config.picked_dates.checkout = end.format('YYYY-MM-DD');

      rooms_grid_view_config.calendar.first = start.format('YYYY-MM-DD');
      rooms_grid_view_config.calendar.last = end.format('YYYY-MM-DD');

      make_reservations_post_data.checkin_date = start.format('YYYY-MM-DD');
      make_reservations_post_data.checkout_date = end.format('YYYY-MM-DD');

      generate_and_display_grid_view_bookings();

      //fligh_search_data.departure_date = start.format('YYYY-MM-DD');
      //fligh_search_data.return_date = end.format('YYYY-MM-DD');
  
      //window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
  
      //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

$(function() {
    $('#make_reservation_date_range_input').daterangepicker({
      opens: 'left',
      locale: {
        cancelLabel: 'Clear'
      }
    }, function(start, end, label) {
  
      setTimeout(()=>{
        document.getElementById("make_reservation_date_range_on_popup_chekin_checkout_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
        document.getElementById("make_reservation_date_range_on_popup_input").value = start.toString().substring(0,11) +"  -  "+ end.toString().substring(0,11);
        document.getElementById("make_reservation_date_range_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
      }, 100);
  
      rooms_grid_view_config.picked_dates.checkin = start.format('YYYY-MM-DD');
      rooms_grid_view_config.picked_dates.checkout = end.format('YYYY-MM-DD');

      rooms_grid_view_config.calendar.first = start.format('YYYY-MM-DD');
      rooms_grid_view_config.calendar.last = end.format('YYYY-MM-DD');

      make_reservations_post_data.checkin_date = start.format('YYYY-MM-DD');
      make_reservations_post_data.checkout_date = end.format('YYYY-MM-DD');

      //fligh_search_data.departure_date = start.format('YYYY-MM-DD');
      //fligh_search_data.return_date = end.format('YYYY-MM-DD');
  
      //window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
  
      //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

/*function submit_room_reservation(){
    
}*/

document.getElementById("make_reservation_submit_button").addEventListener("click", async e => {

    make_reservations_post_data.hotel_brand_id = window.localStorage.getItem("ANDSBZID");

    console.log(make_reservations_post_data);

    if(is_there_overlap){
        show_prompt_to_user(`
                <i style="margin-right: 10px; font-size: 20px; color: orangered;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 Unavailable Spots`, 
            "The spots you've chosen overlaps with exsiting bookings");
        return null;
    }

    if(make_reservations_post_data.checkin_date === "" || make_reservations_post_data.checkout_date === "" || make_reservations_post_data.all_dates_of_occupancy.length === 0){

        show_prompt_to_user(`
                <i style="margin-right: 10px; font-size: 20px; color: orangered;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 Dates Not Added`, 
            "Please add checkin and checkout dates");
        if(document.getElementById("make_reservation_find_spot_pane").style.display === "none")
            toggle_show_make_reservation_find_spot_pane()
        return null;
    }

    if(make_reservations_post_data.rooms.length === 0){

        show_prompt_to_user(`
                <i style="margin-right: 10px; font-size: 20px; color: orangered;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 Room Not Added`, 
            "Please select a room for reservation");
        if(document.getElementById("make_reservation_find_spot_pane").style.display === "none")
            toggle_show_make_reservation_find_spot_pane()
        return null;
    }

    if(!check_if_reservation_guesst_data_is_completed()){
        show_prompt_to_user(`
                <i style="margin-right: 10px; font-size: 20px; color: orangered;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 Guest(s) Info Not Added`, 
            "Please add all guests information");
        toggle_show_make_reservation_add_guests_pane();
        return null
    }

    if(document.getElementById("mk_reservation_guest_email_input").value === ""){
        show_prompt_to_user(`
                <i style="margin-right: 10px; font-size: 20px; color: orangered;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 Guest Email Not Added`, 
            "Please add guest email address");
        toggle_show_make_reservation_add_guests_pane();
        return null
    }
    
    if(document.getElementById("mk_reservation_guest_mobile_input").value === ""){
        show_prompt_to_user(`
                <i style="margin-right: 10px; font-size: 20px; color: orangered;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 Guest Mobile Not Added`, 
            "Please add guest mobile number");
        toggle_show_make_reservation_add_guests_pane();
        return null
    }

    if(make_reservations_post_data.guests.length === 0){
        show_prompt_to_user(`
                <i style="margin-right: 10px; font-size: 20px; color: orangered;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 Guest(s) Not Added`, 
            "Please add how many adult and child guests");
        toggle_show_make_reservation_add_guests_pane();
        return null
    }

    for(let g=0; g< make_reservations_post_data.guests.length; g++){

        let new_guest = await create_guest_record(window.localStorage.getItem("ANDSBZID"), make_reservations_post_data.property_id, "", 
        make_reservations_post_data.guests[g].first_name, make_reservations_post_data.guests[g].last_name,
        make_reservations_post_data.guests[g].type, make_reservations_post_data.guests[g].DOB, 
        make_reservations_post_data.guests[g].gender, document.getElementById("mk_reservation_guest_email_input").value, 
        `${document.getElementById("mk_reservation_guest_mobile_country_code_select").value} ${document.getElementById("mk_reservation_guest_mobile_input").value}`, 0, "booked"/*status*/, ""/*booking_id*/, 
            make_reservations_post_data.rooms[0].id, make_reservations_post_data.rooms[0].number, 
            ""/*street_address*/, ""/*city*/, ""/*town*/, ""/*country*/, ""/*zipcode*/);

        make_reservations_post_data.guests[g].id = new_guest._id;
    }

    make_a_reservation_post_function()

});

function check_if_reservation_guesst_data_is_completed(){

    for(let i=0; i<make_reservations_post_data.guests.length; i++){
        if(make_reservations_post_data.guests[i].first_name === "" || make_reservations_post_data.guests[i].last_name === "" ||
            make_reservations_post_data.guests[i].DOB === "" || make_reservations_post_data.guests[i].gender === ""){
                return false;
            }
    }

    return true;
}

function after_reservation_clean_up_func(){
     
    make_reservations_post_data.hotel_brand_id = "";
    make_reservations_post_data.property_id = "";
    make_reservations_post_data.booking_date = "";
    make_reservations_post_data.rooms = [];
    //make_reservations_post_data.full_property_location = "New York, 1223 Mont Gomery, United States";
    make_reservations_post_data.all_dates_of_occupancy = [];
    make_reservations_post_data.price_paid = 0;
    make_reservations_post_data.checkin_date = "";
    make_reservations_post_data.checkout_date = "";
    make_reservations_post_data.checkin_time = "12:00";
    make_reservations_post_data.checkout_time = "12:00";
    make_reservations_post_data.guests = [];
    
    document.getElementById("make_reservation_number_of_adults_input").value = 1;
    document.getElementById("make_reservation_number_of_children_input").value = 0;
    make_guests_list_from_number_input_values("make_reservation_number_of_adults_input", "make_reservation_number_of_children_input", true);

    if(document.getElementById("make_reservation_find_spot_pane").style.display === "none")
        toggle_show_make_reservation_find_spot_pane();
    
    generate_and_display_grid_view_bookings();

}

function make_a_reservation_post_function(){

    make_reservations_post_data.booking_date = convert_date_object_to_db_string_format(new Date());
    make_reservations_post_data.guest_contact.email = document.getElementById("mk_reservation_guest_email_input").value;
    make_reservations_post_data.guest_contact.mobile = `${document.getElementById("mk_reservation_guest_mobile_country_code_select").value} ${document.getElementById("mk_reservation_guest_mobile_input").value}`;

    $.ajax({
        type: "POST",
        url: "/book_a_cheap_room",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(make_reservations_post_data),
        success: data => {
            console.log(data);
            create_guest_invoice(data.data);
            show_prompt_to_user(`
                <i style="margin-right: 10px; font-size: 20px; color: rgb(0, 177, 139);" class="fa fa-check" aria-hidden="true"></i>
                 Finished Reservation`, 
            "Your Reservation Finished Successfully!");
            after_reservation_clean_up_func();
        },
        error: err => {
            console.log(err);
        }
    });
}

function create_guest_record(hotel_brand_id_param, property_id_param, profile_pic_param, first_name_param, last_name_param,
    guest_type_param, DOB_param, gender_param, email_param, mobile_param, price_paid_param, status_param, booking_id_param, 
    room_id_param, room_number_param, street_address_param, city_param, town_param, country_param, zipcode_param){

    let the_guest = return_new_hotel_guest_obj(hotel_brand_id_param, property_id_param, profile_pic_param, first_name_param, last_name_param,
        guest_type_param, DOB_param, gender_param, email_param, mobile_param, price_paid_param, status_param, booking_id_param, 
        room_id_param, room_number_param, street_address_param, city_param, town_param, country_param, zipcode_param);

    return $.ajax({
        type: "POST",
        url: "/add_new_cheap_hotel_guest/",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(the_guest),
        success: data => {
            console.log(data);
            return data;
        },
        error: err => {
            console.log(err);
            return err;
        }
    });
}

async function create_guest_invoice(booking){

    let invoice_items_param = [];

    for(let i=0; i<booking.guests.length; i++){

        let price_paid = booking.price_paid;
        if(i > 0){
            price_paid = 0;
        }

        let new_item = {
            guest_id: booking.guests[i].id,
            booking_id: booking._id.toString(), //this will make it easy to associate guest with booking
            guest_items: [
                {
                    name: "Room "+booking.rooms[0].number,
                    price: price_paid,
                    quantity: 1,
                    total: price_paid
                }
            ]
            
        }

        invoice_items_param.push(new_item);
    }
    
    let new_invoice = {
        hotel_brand_id: booking.hotel_brand_id,
        property_id: booking.property_id,
        date_created: booking.booking_date,
        date_checkedout: "",
        bookings: [
            booking._id
        ], //this will make it easy to find invoice document
        invoice_items:  invoice_items_param
    }

    return $.ajax({
        type: "POST",
        url: "/add_new_cheap_hotel_guest_invoice/",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(new_invoice),
        success: res =>{
            console.log(res);
            return res;
        },
        error: err => {
            console.log(err);
            return err;
        }
    })
}

$(document).ready(function(){
    setTimeout(()=>{
        continue_room_reservation();
    }, 400);
})