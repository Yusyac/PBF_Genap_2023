import React, {Component} from "react";
import './Mahasiswa.css';
import Post from "../../component/Mahasiswa/Post";

class Mahasiswa extends Component{
    state = {
        listMahasiswa:[],
        insertMahasiswa: {
           id: 1,
           NIM: 1,
           nama: "",
           alamat: "",
           hp:"",
           angkatan: 1,
           status:""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch(`http://localhost:5000/mahasiswa`)
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
        
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:5000/mahasiswa/${data}`, {method: 'DELETE'})
            .then(res => { 
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) =>{
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTombolSimpan = () => {
        fetch(`http://localhost:5000/mahasiswa`, {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })

            .then( (response ) => {
                this.ambilDataDariServerAPI();
            });
    }


    render() {
       return(
           <div className="post-artikel">
               <div className="form pb-2 border-button">
                   <div className="form-group row">
                       <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="title" className="col-sm-2 col-form-label">Alamat</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="title" className="col-sm-2 col-form-label">HP</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="title" className="col-sm-2 col-form-label">Angkatan</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label htmlFor="title" className="col-sm-2 col-form-label">Status</label>
                       <div className="col-sm">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}/>
                       </div>
                   </div>
                   
                   <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
               </div>
               <h2>Daftar Mahasiswa</h2>
               {
                   this.state.listMahasiswa.map(mahasiswa =>{
                       return <Post key={mahasiswa.id} NIM={mahasiswa.NIM} nama={mahasiswa.nama} alamat={mahasiswa.alamat}   hp={mahasiswa.hp}  angkatan={mahasiswa.angkatan}  status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa}/>
                   })
               }
           </div>
       )
    }
}

export default Mahasiswa;