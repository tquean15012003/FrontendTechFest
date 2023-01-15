import React from 'react'
import { useSelector } from 'react-redux'

export default function CompanyAddJob() {
    const { navigate } = useSelector(state => state.NavigateReducer)

    return (
        <form action className='mt-5'>
            <div className="px-24 flex-col justify-center items-center">
                <div className="flex-col py-3 items-center h-210px opacity-100 ">
                    <h1 style={{ color: "#93b2f1" }} className="opacity-100 sm:text-4xl text-2xl font-medium title-font text-center">About this
                        job
                    </h1>
                    <div className="text-lg text-white font-medium title-font text-center">We use this information to find
                        the
                        best candidates for this job. <br /> Add a job title to get started. </div>
                </div>
                <div className="mb-3 flex flex-col flex-nowrap ">
                    <div className="flex flex-col">
                        <div className="my-3 grid gap-4">
                            {/* luu data job country cua company */}
                            <div className="flex-row" data-testid="jobcountry">
                                <label className="text-xl text-white after:content-['*'] after:ml-0.5 after:text-white block font-bold" htmlFor>Location
                                </label>
                                <div className="">
                                    <div className="text-xl mt-1 pr-3 pb-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                        <select className="text-lg" name="country" id="country">
                                            <option className="opacity-25">Select country</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">Aland Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia</option>
                                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                            <option value="BA">Bosnia and Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BV">Bouvet Island</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="BN">Brunei Darussalam</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CA">Canada</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CX">Christmas Island</option>
                                            <option value="CC">Cocos (Keeling) Islands</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CG">Congo</option>
                                            <option value="CD">Congo, Democratic Republic of the Congo</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="CI">Cote D'Ivoire</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CU">Cuba</option>
                                            <option value="CW">Curacao</option>
                                            <option value="CY">Cyprus</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands (Malvinas)</option>
                                            <option value="FO">Faroe Islands</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="GF">French Guiana</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="TF">French Southern Territories</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="DE">Germany</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GP">Guadeloupe</option>
                                            <option value="GU">Guam</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-Bissau</option>
                                            <option value="GY">Guyana</option>
                                            <option value="HT">Haiti</option>
                                            <option value="HM">Heard Island and Mcdonald Islands</option>
                                            <option value="VA">Holy See (Vatican City State)</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="IN">India</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran, Islamic Republic of</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IE">Ireland</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="KP">Korea, Democratic People's Republic of</option>
                                            <option value="KR">Korea, Republic of</option>
                                            <option value="XK">Kosovo</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Lao People's Democratic Republic</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libyan Arab Jamahiriya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao</option>
                                            <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MH">Marshall Islands</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="YT">Mayotte</option>
                                            <option value="MX">Mexico</option>
                                            <option value="FM">Micronesia, Federated States of</option>
                                            <option value="MD">Moldova, Republic of</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="AN">Netherlands Antilles</option>
                                            <option value="NC">New Caledonia</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="NF">Norfolk Island</option>
                                            <option value="MP">Northern Mariana Islands</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PW">Palau</option>
                                            <option value="PS">Palestinian Territory, Occupied</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PN">Pitcairn</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="QA">Qatar</option>
                                            <option value="RE">Reunion</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russian Federation</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="BL">Saint Barthelemy</option>
                                            <option value="SH">Saint Helena</option>
                                            <option value="KN">Saint Kitts and Nevis</option>
                                            <option value="LC">Saint Lucia</option>
                                            <option value="MF">Saint Martin</option>
                                            <option value="PM">Saint Pierre and Miquelon</option>
                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                            <option value="WS">Samoa</option>
                                            <option value="SM">San Marino</option>
                                            <option value="ST">Sao Tome and Principe</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="CS">Serbia and Montenegro</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SX">Sint Maarten</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="SD">Sudan</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                            <option value="SZ">Swaziland</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="SY">Syrian Arab Republic</option>
                                            <option value="TW">Taiwan, Province of China</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania, United Republic of</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TL">Timor-Leste</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad and Tobago</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks and Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                            <option value="UM">United States Minor Outlying Islands</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VE">Venezuela</option>
                                            <option value="VN">Viet Nam</option>
                                            <option value="VG">Virgin Islands, British</option>
                                            <option value="VI">Virgin Islands, U.s.</option>
                                            <option value="WF">Wallis and Futuna</option>
                                            <option value="EH">Western Sahara</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label className="block">
                            <span className="text-xl text-white after:content-['*'] after:ml-0.5 after:text-white block font-bold">
                                Job Title
                            </span>
                            <input type="text" name="position" className="text-xl font-medium mt-1 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Software Engineer" />
                        </label>
                    </div>
                    <div className="my-3 flex flex-col">
                        <div className="grid gap-2 ">
                            <label htmlFor>
                                <span className="text-xl text-white after:content-['*'] after:ml-0.5 after:text-white block font-bold">What type of job it is?</span>
                            </label>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="jobType1" name="jobType1" defaultValue="Full-time" />
                                <label className="form-check-label inline-block text-white" htmlFor="flexCheckDefault">
                                    Full-time
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="jobType2" name="jobType2" defaultValue="Part-time" />
                                <label className="form-check-label inline-block text-white" htmlFor="flexCheckDefault">
                                    Part-time
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="jobType3" name="jobType3" defaultValue="Temporary" />
                                <label className="form-check-label inline-block text-white" htmlFor="flexCheckDefault">
                                    Temporary
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="jobType4" name="jobType4" defaultValue="Internship" />
                                <label className="form-check-label inline-block text-white" htmlFor="flexCheckDefault">
                                    Internship
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="jobType5" name="jobType5" defaultValue="New-Grad" />
                                <label className="form-check-label inline-block text-white" htmlFor="flexCheckDefault">
                                    New-Grad
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="jobType6" name="jobType6" defaultValue="Permanent" />
                                <label className="form-check-label inline-block text-white" htmlFor="flexCheckDefault">
                                    Permanent
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl text-white">What is the pay rate?</div>
                        <div className="flex flex-row my-3">
                            <div className="mr-2 text-xl font-semibold text-white">Show pay by </div>
                            <select className="text-xl" name="payBy" id="payBy" onchange="myFunction()">
                                <option value="Range">Range</option>
                                <option value="Start">Starting Amount</option>
                                <option value="Exact">Exact Amount</option>
                                <option value="Max">Maxium Amount</option>
                            </select>
                            <div className="mr-2 ml-5 font-semibold text-xl text-white">Currency </div>
                            <select className="text-xl" id="currency" name="currency">
                                <option>Select currency</option>
                                <option value="AFN">Afghan Afghani</option>
                                <option value="ALL">Albanian Lek</option>
                                <option value="DZD">Algerian Dinar</option>
                                <option value="AOA">Angolan Kwanza</option>
                                <option value="ARS">Argentine Peso</option>
                                <option value="AMD">Armenian Dram</option>
                                <option value="AWG">Aruban Florin</option>
                                <option value="AUD">Australian Dollar</option>
                                <option value="AZN">Azerbaijani Manat</option>
                                <option value="BSD">Bahamian Dollar</option>
                                <option value="BHD">Bahraini Dinar</option>
                                <option value="BDT">Bangladeshi Taka</option>
                                <option value="BBD">Barbadian Dollar</option>
                                <option value="BYR">Belarusian Ruble</option>
                                <option value="BEF">Belgian Franc</option>
                                <option value="BZD">Belize Dollar</option>
                                <option value="BMD">Bermudan Dollar</option>
                                <option value="BTN">Bhutanese Ngultrum</option>
                                <option value="BTC">Bitcoin</option>
                                <option value="BOB">Bolivian Boliviano</option>
                                <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
                                <option value="BWP">Botswanan Pula</option>
                                <option value="BRL">Brazilian Real</option>
                                <option value="GBP">British Pound Sterling</option>
                                <option value="BND">Brunei Dollar</option>
                                <option value="BGN">Bulgarian Lev</option>
                                <option value="BIF">Burundian Franc</option>
                                <option value="KHR">Cambodian Riel</option>
                                <option value="CAD">Canadian Dollar</option>
                                <option value="CVE">Cape Verdean Escudo</option>
                                <option value="KYD">Cayman Islands Dollar</option>
                                <option value="XOF">CFA Franc BCEAO</option>
                                <option value="XAF">CFA Franc BEAC</option>
                                <option value="XPF">CFP Franc</option>
                                <option value="CLP">Chilean Peso</option>
                                <option value="CNY">Chinese Yuan</option>
                                <option value="COP">Colombian Peso</option>
                                <option value="KMF">Comorian Franc</option>
                                <option value="CDF">Congolese Franc</option>
                                <option value="CRC">Costa Rican ColÃ³n</option>
                                <option value="HRK">Croatian Kuna</option>
                                <option value="CUC">Cuban Convertible Peso</option>
                                <option value="CZK">Czech Republic Koruna</option>
                                <option value="DKK">Danish Krone</option>
                                <option value="DJF">Djiboutian Franc</option>
                                <option value="DOP">Dominican Peso</option>
                                <option value="XCD">East Caribbean Dollar</option>
                                <option value="EGP">Egyptian Pound</option>
                                <option value="ERN">Eritrean Nakfa</option>
                                <option value="EEK">Estonian Kroon</option>
                                <option value="ETB">Ethiopian Birr</option>
                                <option value="EUR">Euro</option>
                                <option value="FKP">Falkland Islands Pound</option>
                                <option value="FJD">Fijian Dollar</option>
                                <option value="GMD">Gambian Dalasi</option>
                                <option value="GEL">Georgian Lari</option>
                                <option value="DEM">German Mark</option>
                                <option value="GHS">Ghanaian Cedi</option>
                                <option value="GIP">Gibraltar Pound</option>
                                <option value="GRD">Greek Drachma</option>
                                <option value="GTQ">Guatemalan Quetzal</option>
                                <option value="GNF">Guinean Franc</option>
                                <option value="GYD">Guyanaese Dollar</option>
                                <option value="HTG">Haitian Gourde</option>
                                <option value="HNL">Honduran Lempira</option>
                                <option value="HKD">Hong Kong Dollar</option>
                                <option value="HUF">Hungarian Forint</option>
                                <option value="ISK">Icelandic KrÃ³na</option>
                                <option value="INR">Indian Rupee</option>
                                <option value="IDR">Indonesian Rupiah</option>
                                <option value="IRR">Iranian Rial</option>
                                <option value="IQD">Iraqi Dinar</option>
                                <option value="ILS">Israeli New Sheqel</option>
                                <option value="ITL">Italian Lira</option>
                                <option value="JMD">Jamaican Dollar</option>
                                <option value="JPY">Japanese Yen</option>
                                <option value="JOD">Jordanian Dinar</option>
                                <option value="KZT">Kazakhstani Tenge</option>
                                <option value="KES">Kenyan Shilling</option>
                                <option value="KWD">Kuwaiti Dinar</option>
                                <option value="KGS">Kyrgystani Som</option>
                                <option value="LAK">Laotian Kip</option>
                                <option value="LVL">Latvian Lats</option>
                                <option value="LBP">Lebanese Pound</option>
                                <option value="LSL">Lesotho Loti</option>
                                <option value="LRD">Liberian Dollar</option>
                                <option value="LYD">Libyan Dinar</option>
                                <option value="LTL">Lithuanian Litas</option>
                                <option value="MOP">Macanese Pataca</option>
                                <option value="MKD">Macedonian Denar</option>
                                <option value="MGA">Malagasy Ariary</option>
                                <option value="MWK">Malawian Kwacha</option>
                                <option value="MYR">Malaysian Ringgit</option>
                                <option value="MVR">Maldivian Rufiyaa</option>
                                <option value="MRO">Mauritanian Ouguiya</option>
                                <option value="MUR">Mauritian Rupee</option>
                                <option value="MXN">Mexican Peso</option>
                                <option value="MDL">Moldovan Leu</option>
                                <option value="MNT">Mongolian Tugrik</option>
                                <option value="MAD">Moroccan Dirham</option>
                                <option value="MZM">Mozambican Metical</option>
                                <option value="MMK">Myanmar Kyat</option>
                                <option value="NAD">Namibian Dollar</option>
                                <option value="NPR">Nepalese Rupee</option>
                                <option value="ANG">Netherlands Antillean Guilder</option>
                                <option value="TWD">New Taiwan Dollar</option>
                                <option value="NZD">New Zealand Dollar</option>
                                <option value="NIO">Nicaraguan CÃ³rdoba</option>
                                <option value="NGN">Nigerian Naira</option>
                                <option value="KPW">North Korean Won</option>
                                <option value="NOK">Norwegian Krone</option>
                                <option value="OMR">Omani Rial</option>
                                <option value="PKR">Pakistani Rupee</option>
                                <option value="PAB">Panamanian Balboa</option>
                                <option value="PGK">Papua New Guinean Kina</option>
                                <option value="PYG">Paraguayan Guarani</option>
                                <option value="PEN">Peruvian Nuevo Sol</option>
                                <option value="PHP">Philippine Peso</option>
                                <option value="PLN">Polish Zloty</option>
                                <option value="QAR">Qatari Rial</option>
                                <option value="RON">Romanian Leu</option>
                                <option value="RUB">Russian Ruble</option>
                                <option value="RWF">Rwandan Franc</option>
                                <option value="SVC">Salvadoran ColÃ³n</option>
                                <option value="WST">Samoan Tala</option>
                                <option value="SAR">Saudi Riyal</option>
                                <option value="RSD">Serbian Dinar</option>
                                <option value="SCR">Seychellois Rupee</option>
                                <option value="SLL">Sierra Leonean Leone</option>
                                <option value="SGD">Singapore Dollar</option>
                                <option value="SKK">Slovak Koruna</option>
                                <option value="SBD">Solomon Islands Dollar</option>
                                <option value="SOS">Somali Shilling</option>
                                <option value="ZAR">South African Rand</option>
                                <option value="KRW">South Korean Won</option>
                                <option value="XDR">Special Drawing Rights</option>
                                <option value="LKR">Sri Lankan Rupee</option>
                                <option value="SHP">St. Helena Pound</option>
                                <option value="SDG">Sudanese Pound</option>
                                <option value="SRD">Surinamese Dollar</option>
                                <option value="SZL">Swazi Lilangeni</option>
                                <option value="SEK">Swedish Krona</option>
                                <option value="CHF">Swiss Franc</option>
                                <option value="SYP">Syrian Pound</option>
                                <option value="STD">São Tomé and Príncipe Dobra</option>
                                <option value="TJS">Tajikistani Somoni</option>
                                <option value="TZS">Tanzanian Shilling</option>
                                <option value="THB">Thai Baht</option>
                                <option value="TOP">Tongan pa'anga</option>
                                <option value="TTD">Trinidad &amp; Tobago Dollar</option>
                                <option value="TND">Tunisian Dinar</option>
                                <option value="TRY">Turkish Lira</option>
                                <option value="TMT">Turkmenistani Manat</option>
                                <option value="UGX">Ugandan Shilling</option>
                                <option value="UAH">Ukrainian Hryvnia</option>
                                <option value="AED">United Arab Emirates Dirham</option>
                                <option value="UYU">Uruguayan Peso</option>
                                <option value="USD">US Dollar</option>
                                <option value="UZS">Uzbekistan Som</option>
                                <option value="VUV">Vanuatu Vatu</option>
                                <option value="VEF">Venezuelan BolÃ­var</option>
                                <option value="VND">Vietnamese Dong</option>
                                <option value="YER">Yemeni Rial</option>
                                <option value="ZMK">Zambian Kwacha</option>
                            </select>
                        </div>
                        <div id="amount" className="mt-3">
                            <div className="flex flex-row">
                                <div className="mr-2 text-white text-xl font-semibold">Amount </div>
                                <input defaultValue={0} min={1} className="border rounded text-xl px-2" type="number" />
                                <div className="mr-2 ml-5 text-white text-xl font-semibold">Rate </div>
                                <select name="Rate" id="Rate">
                                    <option value="perHour">Per hour</option>
                                    <option value="perDay">Per day</option>
                                    <option value="perWeek">Per week</option>
                                    <option value="perMonth">Per month</option>
                                    <option value="perYear">Per year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="text-white font-bold text-xl mb-2">Job Description</div>
                    <p className='text-white mb-2'>Upload a PDF or DOCX to describe the responsibilities of this job, required work experience, skills,
                        or
                        education.
                    </p>
                    <input className="text-white text-lg" type="file" name="file" accept="file/*" />
                </div>
                <div className="container mx-auto mt-20 mb-0 flex justify-center flex-row items-center">
                    <button style={{backgroundColor: "#5a00b1"}} onClick={() => { navigate("/companyrecruitment", { replace: false }) }} className="rounded flex mr-3 space-x-3 items-center px-5 py-2 hover:scale-110 duration-500">
                        <span className="text-white text-xl font-semibold">Submit</span>
                    </button>
                </div>
            </div>
        </form>

    )
}
