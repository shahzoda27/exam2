import React, { useState } from 'react'
import ModalApp from './ModalApp'
const Users = () => {
    const [open,setOpen] = useState([])
    const [modalVisible,setVisible] = useState(false)
    const editTask1 = (index)=>{
        setVisible(true)
        open.splice(index,1)
        setOpen([...open])
    }
    const deletTask1 = (index) =>{
        open.splice(index,1)
        setOpen([...open])
      }

  return (
    <>
        <ModalApp modalVisible={modalVisible} toggle={()=>setVisible(false)} users={open} setUsers={setOpen}></ModalApp>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>open</h1>
                        </div>
                        <div className='card-body'>
                            {
                                open.map((item,index)=>{
                                    return <div key={index}>
                                    <h5>{item.name}</h5>
                                    <h5>{item.lang}</h5>
                                    <button onClick={()=>deletTask1(index)} className='btn btn-success'>delete</button>
                                    <button  onClick={()=>editTask1(index)} className='btn btn-danger'>edit</button>
                                    </div>
                                })
                            }
                     
                    </div>
                    <div className='card-footer'>
                    <button className='btn btn-info' onClick={()=>setVisible(true)}>Add</button>
                    </div>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>pending</h1>
                        </div>
                        <div className='card-body'>
                            {
                                open.map((item,index)=>{
                                    return <div key={index}>
                                    <h5>{item.name}</h5>
                                    <h5>{item.lang}</h5>
                                    <button onClick={()=>deletTask1(index)} className='btn btn-success'>delete</button>
                                    <button  onClick={()=>editTask1(index)} className='btn btn-danger'>edit</button>
                                    </div>
                                })
                            }
                     
                    </div>
                    <div className='card-footer'>
                    <button className='btn btn-info' onClick={()=>setVisible(true)}>Add</button>
                    </div>
                    </div>
                </div>

 



                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>inproge</h1>
                        </div>
                        <div className='card-body'>
                            {
                                open.map((item,index)=>{
                                    return <div key={index}>
                                    <h5>{item.name}</h5>
                                    <h5>{item.lang}</h5>
                                    <button onClick={()=>deletTask1(index)} className='btn btn-success'>delete</button>
                                    <button  onClick={()=>editTask1(index)} className='btn btn-danger'>edit</button>
                                    </div>
                                })
                            }
                     
                    </div>
                    <div className='card-footer'>
                    <button className='btn btn-info' onClick={()=>setVisible(true)}>Add</button>
                    </div>
                    </div>
                </div>







                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>progress</h1>
                        </div>
                        <div className='card-body'>
                            {
                                open.map((item,index)=>{
                                    return <div key={index}>
                                    <h5>{item.name}</h5>
                                    <h5>{item.lang}</h5>
                                    <button onClick={()=>deletTask1(index)} className='btn btn-success'>delete</button>
                                    <button  onClick={()=>editTask1(index)} className='btn btn-danger'>edit</button>
                                    </div>
                                })
                            }
                     
                    </div>
                    <div className='card-footer'>
                    <button className='btn btn-info' onClick={()=>setVisible(true)}>Add</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Users