import React, { useState } from 'react'
import { Modal,ModalHeader, ModalBody,ModalFooter} from 'reactstrap'
const ModalApp = ({modalVisible,toggle,users,setUsers}) => {
    const saveUser = ()=>{
       let payload = {
        name,lang
       }
       users.push({...payload})
       setUsers([...users])
       toggle()
    }
    const [name,setName] = useState("")
    const [lang,setLang] = useState("")
  return (
    <Modal isOpen={modalVisible} toggle={toggle}>
      <ModalHeader>
        <h1>Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Name' className='form-control my-2'/>
            <select className='form-control my-2' onChange={(e)=>setLang(e.target.value)} >
                <option  value="" hidden> Select your language</option>
                <option  value="open">open</option>
                <option  value="pending">pending</option>
                <option  value="inproge">inproge</option>
                <option  value="progress">progress</option>
            </select>
        </form>
      </ModalBody>
      <ModalFooter>
       <button onClick={saveUser} className='btn btn-primary'>Save</button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalApp