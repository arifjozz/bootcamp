 const simpanDOM = document.getElementById('simpan')
const inputDOM = document.getElementById('input')
const listDOM = document.getElementById('list')
let Data = []

localData = JSON.parse(localStorage.getItem("Daftar"))
if(localData != null){
    Data = localData
}
render()

function Tambah (){
    const inputBaru = inputDOM.value
    Data.push(inputBaru)
    
    inputDOM.value = ""
    localStorage.setItem("Daftar", JSON.stringify(Data))
   
    
}

function render(){
    let Tampil = ""
    for(let i = 0; i < Data.length; i++){
        Tampil +=  `
        <div class="input-group mb-3">
        
  <p class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
   ${Data[i]}
  <div class="input-group-append">
    
        
         
          
            <div class="col-md-12">
              <button type="button" class="btn btn-outline-danger btn btn-block" onclick="hapus(${i})">Hapus</button>
            </p
            </div>
            </div>
            </div>
        </li>
        `
    }
    listDOM.innerHTML = Tampil
    
}
function hapus(id){
    Data.splice(id, 1);
    localStorage.setItem("Daftar",JSON.stringify(Data));
    render()
}


