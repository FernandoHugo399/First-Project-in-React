import '../css/Header.css'

export default function Header(){
    return(
        <header style={{ backgroundImage: "url(/main_bg.png)" }}>
            <div className='menu'>
                <div className='center'>
                    <div className='title'><h2>Lorem Ipsum</h2></div> {/* title */}
                </div> {/* center */}
            </div>  {/* menu */}
            
            <div className='container-main'>
                <div className='center'>
                    <div className='list-container-main'>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectur</li>
                            <li>Lorem ipsum dolor sit amet consectur</li>
                            <li>Lorem ipsum dolor sit amet consectur</li>
                            <li>Lorem ipsum dolor sit amet consectur</li>
                        </ul>
                    </div> {/* list-container-main */}

                    <div className='form-container-main'>
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                        <form>
                            <div className="input-form">
                                <span>Nome*</span>
                                <input type="text" name="nome" required/>
                            </div> {/* input-form */}

                            <div className="input-form">
                                <span>E-mail*</span>
                                <input type="text" name="email" required/>
                            </div> {/* input-form */}

                            <div className="input-form">
                                <span>Telefone*</span>
                                <input type="text" name="Telefone" required/>
                                <span>* Campos obrigatórios</span>
                            </div> {/* input-form */}

                            <div className="input-submit">
                                <input type="submit" name="acao" value="Enviar"/>
                            </div> {/* input-submit */}

                        </form>
                    </div> {/* form-container-main */}

                </div> {/* center */}
            </div> {/* container-main */}
        </header>
    )
}