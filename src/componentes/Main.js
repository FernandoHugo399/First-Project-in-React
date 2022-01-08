import '../css/Main.css';

export default function Main(){
    return (
        <main>
            <div className='primeira-chamada'>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed ipsum iste, error rem eaque repellendus iusto quia fuga, illo nesciunt? Nesciunt dolore quibusdam error, deleniti neque dolorum facere commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut perspiciatis, expedita iusto assumenda suscipit quidem earum adipisci rem rerum, maiores tempora esse corporis voluptates similique harum voluptatem voluptate obcaecati!</p>
                <div className='arrow' style={{ backgroundImage: "url(/arrow.png)" }}></div>
            </div> {/* primeira-chamada */}
            
            <div className='segunda-chamada'>
                <h2>Lorem ipsum dolor sit amet consectur</h2>
                <div className='center-itens'>
                    <div className='item'>
                        <img src='/icon.png' alt='icon-pc'/>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci error ducimus harum quibusdam quasi enim ullam unde qui! Nulla quaerat voluptatem aspernatur.</p>
                    </div> {/* item */}

                    <div className='item'>
                        <img src='/icon.png' alt='icon-pc'/>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci error ducimus harum quibusdam quasi enim ullam unde qui! Nulla quaerat voluptatem aspernatur.</p>
                    </div> {/* item */}

                    <div className='item'>
                        <img src='/icon.png' alt='icon-pc'/>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci error ducimus harum quibusdam quasi enim ullam unde qui! Nulla quaerat voluptatem aspernatur.</p>
                    </div> {/* item */}

                </div> {/* center-itens */}
            </div> {/* segunda-chamada */}

        </main>
    );
};