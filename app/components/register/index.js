// 'use client'
// import React, { useState } from 'react';
// import instance from "../../config/axiosInstance"; // Замените на путь к вашему экземпляру Axios
// import Link from "next/link";
// export default function Section() {
    

//     // const [formData, setFormData] = useState({
//     //     email: "",
//     //     full_name: "",
//     //     username: "",
//     //     password: "",
//     // });

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setFormData((prevData) => ({
//     //         ...prevData,
//     //         [name]: value,
//     //     }));
//     // };

//     // const handleRegistration = async (e) => {
//     //     e.preventDefault();
    
//     //     try {
//     //         // Выполняем POST-запрос на сервер для регистрации
//     //         const response = await instance.post("/api/auth/signup", formData);
    
//     //         // Ваша логика обработки ответа
//     //         console.log(response.data);
//     //     } catch (error) {
//     //         // Обработка ошибок
//     //         console.error("Registration failed:", error.message);
//     //     }
//     // };

//     // const handleLogin = async (e) => {
//     //     e.preventDefault();

//     //     try {
//     //         // Выполняем POST-запрос на сервер для входа
//     //         const token = "ваш_токен_здесь"; // Замените на актуальный токен

//     //         const response = await instance.post("/api/auth/signin", formData, {
//     //             headers: {
//     //               "Authorization": `Bearer ${token}`,
//     //             },
//     //           });

//     //         // Ваша логика обработки ответа
//     //         console.log(response.data);

//     //         // Сохраняем токен после успешного входа, если используете JWT
//     //         // const token = response.data.token;
//     //         // сохраняем токен в localStorage или состоянии
//     //     } catch (error) {
//     //         // Обработка ошибок
//     //         console.error("Login failed:", error.message);
//     //     }
//     // };
//     return (
//         <div className="main">
//             <div className="first_box">
//                 <div className="cards">
//                     <div className="card">
//                         <img src="/img/instagram_logo.png"></img>
//                         <h4>Зарегистрируйтесь, чтобы <br>
//                         </br>смотреть фото и видео ваших друзей.</h4>
//                         <button className="fcb_button">
//                             <p>Войти через Facebook</p>
//                         </button>
//                         <div className="line_part">
//                             <div className="line"></div>
//                             <h4>ИЛИ</h4>
//                             <div className="line"></div>
//                         </div>
//                         <form action="" method="POST" onSubmit={handleRegistration}>
//                             <div className="log_inp">
//                                 <input type="email" name="email" placeholder="Моб. телефон или эл. адрес" required onChange={handleChange} />
//                                 <input type="text" name="full_name" placeholder="Имя и фамилия" required onChange={handleChange} />
//                                 <input type="text" name="nickname" placeholder="Имя пользователя" required onChange={handleChange} />
//                                 <input type="password" name="password" placeholder="Пароль" required onChange={handleChange} />
//                             </div>
//                             <div className="policy">
//                                 <p>Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a>Подробнее</a></p>
//                                 <p>Регистрируясь, вы принимаете наши <a>Условия, Политику конфиденциальности и Политику в отношении файлов cookie.</a></p>
//                             </div>
//                             <div className="reg_btn">
//                                 <button className="reg_button" type="submit">
//                                 <p>Регистрация</p>
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div className="second_box">
//                 <div className="card card_log">
//                     <h4>Есть аккаунт? <Link href="/login">Вход</Link></h4>
//                 </div>
//             </div>
//             <div className="download"><h4>Установите приложение</h4></div>
//             <div className="third_box">
//                 <div className="links">
//                         <img src="/img/play_market.png"></img>
//                 </div>
//                 <div className="links">
//                         <img src="/img/microsoft.png"></img>
//                 </div>
//             </div>
//         <footer className="footer">
//             <a>Meta</a>
//             <a>Информация</a>
//             <a>Блог</a>
//             <a>Вакансии</a>
//             <a>Помощь</a>
//             <a>API</a>
//             <a>Конфиденциальность</a>
//             <a>Условия</a>
//             <a>Места</a>
//             <a>Instagram Lite</a>
//             <a>Threads</a>
//             <a>Загрузка контактов и лица, не являющиеся пользователями</a>
//             <a>Meta Verified</a>
//         </footer>
//             <div className="meta">
//                 <p>© 2023 Instagram from Meta</p>
//             </div>
//         </div>
//     )
// }
