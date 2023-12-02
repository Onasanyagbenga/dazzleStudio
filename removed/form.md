            <form action="https://formspree.io/f/mdorjopz" method="post" class="form">
                    <label for="clientName">
                        <input type="text" name="clientName" id="clientName" placeholder="" pattern="[A-Za-z]{3,}" required>
                        <span class="name"><span><i class="fa-regular fa-user icon"></i></span> Name</span>
                    </label>
                <!-- <span> Minimum 3 letters</span> -->
                <label for="Telephone">
                    <input type="text" name="Telephone" id="Telephone" placeholder="" pattern="[0-9]{11,}" required >
                    <span class="name"><span><i class="fa-solid fa-phone icon"></i></span> Phone Number</span>
                </label>
                <select name="appt-type" id="appt-type" required>
                    <optgroup label="Select Appointment Type">
                        <option value="Hair Appointment" id="HairApt">Hair Appointment</option>
                        <option value="Makeover Appointment" id="MakeupApt">Makeover Appointment</option>
                    </optgroup>
                </select>
                <select name="service" id="service" required>
                    <optgroup label="MAKEUP" id="makeup">
                        <option value="Regular-SoftGlam">Regular Soft Glam</option>
                        <option value="Birthday-Makeup">Birthday Makeup</option>
                        <option value="Bridal-Makeup">Bridal Makeup (Price varies)</option>
                    </optgroup>
                    <optgroup label="LOCS" id="locs">
                        <option value="Crochet-instant-full">Crotchet ( instant locs ) Full head</option>
                        <option value="Crochet-instant-half">Crotchet ( instant locs ) Half head</option>
                        <option value="Comb-Coils-Full head">Comb-Coils ( Full head )</option>
                        <option value="Comb-Coils-Half head">Comb-Coils ( Half head )</option>
                        <option value="Crotchet-maintenance">Crotchet maintenance</option>
                        <option value="Two-strand-twists-palmrolling">Two strand twists & palmrolling</option>
                    </optgroup>
                    <optgroup label="Additional Services" id="addt-service">
                        <option value="Corncrows">Cornrows ( Including Didi )</option>
                        <option value="Natural-twist">Natural twist without extension</option>
                        <option value="Loc-styling">Loc Styling</option>
                        <option value="Hair-Coloring">Hair Coloring</option>
                        <option value="Loc-Repair">Loc Repair</option>
                        <option value="home-service">Home Service ( Rates apply )</option>
                    </optgroup>
                </select>
                <span class="date">
                    <input type="date" value="2023-01-01" placeholder="Select Date" required>
                </span>
                <span class="time">
                    <input type="time" value="8:00" placeholder="Select Time" required>
                </span>
                <label for="message">
                    <textarea name="message" id="message" placeholder=" "></textarea>
                    <span class="name"><span><i class="fa-solid fa-message icon"></i></span>
                    Message</span>
                </label>
                <button id="openModalBtn">Submit</button>
            </form>