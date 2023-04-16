const canal=[
    {
        id:1,
        nombrecanal:"teleamazonas",
    },
    {
        id:2,
        nombrecanal:"ecuavisa",
    },
    {
        id:3,
        nombrecanal:"rts",
    },
    {
        id:4,
        nombrecanal:"oromar",
    },
    {
        id:003,
        nombrecanal:"TC",
    },
   
]
const programa=[
    {
        id:1,
        programatv:"noticiero",
        categoria:"informativo",
        tipo:"A"
 
    },
    {
        id:2,
        programatv:"en contacto",
        categoria:"farandula",
        tipo: "A"
 
    },
    {
        id:3,
        programatv:"laura",
        categoria:"entretenimiento",
        tipo: "A"
 
    },
    {
        id:4,
        programatv:"novela",
        categoria:"telenovela",
        tipo: "A"
 
    },
    {
        id:5,
        programatv:"casa en casa",
        categoria:"farandula",
        tipo: "A"
 
    },
]
const guia=[
    {
        id:1,
        icanal:3,
        idprograma:1,
        horatransmicion:"9:00",
        rating:50
 
    },
    {
        id:2,
        icanal:2,
        idprograma:3,
        horatransmicion:"2:00",
        rating: 65
    },
    {
        id:3,
        icanal:1,
        idprograma:2,
        horatransmicion:"7:00",
        rating: 80
    },
    {
        id:4,
        icanal:5,
        idprograma:1,
        horatransmicion:"5:00",
        rating: 99
    },
    {
        id:5,
        icanal:2,
        idprograma:4,
        horatransmicion:"8:00",
        rating: 78
    },
]

async function findCanalForId(id)
{
    const canales = canal.find((canales)=> canales.id===id );
    if (!canales)
    {
        const error =  new Error();
        error.message="No hay este canal";
        throw error;
    }
    return canales;

}

async function findPrograForId(id)
{
    const progra =  programa.find((progra)=>{
        return progra.id===id;
    });
    if (!progra)
    {
        const error = new Error();
        error.message="No hay ese programa";
        throw error;
    }
    return progra;
}

(async ()=>{
    try
    {
        const canales  =   await findCanalForId(3);
        const progra =   await  findPrograForId(acti.idprograma);
        canales.progra = progra;
        console.log(canales)
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();