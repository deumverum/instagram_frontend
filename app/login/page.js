import Link from "next/link"  
export default function Section() {
    return (
        <div className="main_login">
            <div className="main login flex">
                <div className="log_img">
                    <img src="/img/log_prew.png"></img>
                </div>
                <div className="right_side_log">
                    <div className="first_box_log">
                        <div className="cards">
                            <div className="card">
                                <img src="/img/instagram_logo.png"></img>
                                <form action="" method = "POST">
                                    <div className="log_inp">
                                        <input type="email" name="email" placeholder="Моб. телефон или эл. адрес" required pattern=".*.*"/>
                                        <input type="password" name="password" placeholder="Пароль" required/>                    
                                    </div>
                                </form>
                            <button className="fcb_button">
                                <p>Войти через Facebook</p>
                            </button>
                            <div className="line_part">
                                        <div className="line"></div>
                                        <h4>ИЛИ</h4>
                                        <div className="line"></div>
                                    </div>
                            </div>
                            <div className="fcbk">
                                <a>Log in with Facebook</a>
                            </div>
                            <div className="forgot">
                                <a>Forgot password?</a>
                            </div>
                        </div>
                    </div>
                    <div className="second_box_log">
                        <div className="card card_log">
                            <h4>У вас ещё нет аккаунта?<Link href="/">Зарегистрироваться</Link></h4>
                        </div>
                    </div>
                    <div className="download"><h4>Установите приложение</h4></div>
                    <div className="third_box_log">
                        <div className="links">
                            <img src="/img/play_market.png"></img>
                        </div>
                    <div className="links">
                            <img src="/img/microsoft.png"></img>
                    </div>
                </div>
                </div>
            </div>
        <footer className="footer">
            <a>Meta</a>
            <a>Информация</a>
            <a>Блог</a>
            <a>Вакансии</a>
            <a>Помощь</a>
            <a>API</a>
            <a>Конфиденциальность</a>
            <a>Условия</a>
            <a>Места</a>
            <a>Instagram Lite</a>
            <a>Threads</a>
            <a>Загрузка контактов и лица, не являющиеся пользователями</a>
            <a>Meta Verified</a>
        </footer>
            <div className="meta">
                <p>© 2023 Instagram from Meta</p>
            </div>
        </div>
    )
}