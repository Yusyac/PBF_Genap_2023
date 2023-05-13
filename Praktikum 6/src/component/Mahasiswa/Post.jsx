import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                 <div className="judul-artikel">{props.NIM}</div>
                 <div className="judul-artikel">{props.nama}</div>
                 <p className="isi-artikel">{props.alamat}</p>
                 <div className="judul-artikel">{props.hp}</div>
                 <div className="judul-artikel">{props.angkatan}</div>
                 <div className="judul-artikel">{props.status}</div>
                 <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
     )
}
export default Post;