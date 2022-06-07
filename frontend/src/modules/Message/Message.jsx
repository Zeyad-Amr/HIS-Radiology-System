import React from 'react'
import '../Message/Message.css'


function Message() {
  return (
<section id="message">
      <form className="signup-form">
        <div className="serv-cont">
          <div
            className="text"
            style={{
              textAlign: "center",
              fontSize: "xx-large",
            }}
          >
            Message
          </div>
          <div class="input-field">
            <input type="text" required value={'data.start_time'}></input>
            <label>Name</label>
          </div>
          <div class="input-field">
            <input type="text" required value={'data.end_time'}></input>
            <label>E-mail</label>
          </div>
          <div class="input-field">
            <textarea type="text" rows='10' cols='40'
            required value={'loremassddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'}
            style={{  height: '100%',
                width: '100%',
                border: '1px solid silver',
                paddingLeft: '15%',
                outline: 'none',
                fontSize: '15px',
                transition: '0.4s',
                marginTop: '10px',
                borderRadius: '20px',
                paddingTop: '5%',
                maxHeight: '100vh',
                paddingRight: '15%',
            }}>

            </textarea>
            <label>Message</label>
          </div>
          {/* <Button value="Click me!" /> */}
        </div>
      </form>
    </section>
  )
}

export default Message