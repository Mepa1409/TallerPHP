<?php
class Student{
    private $code;
    private $nombre;
    private $deporte;
    private $actividad;

    function __construct( $code, $nombre,$deporte,$actividad){
        $this->code = $code;
        $this->nombre = $nombre;
        $this->deporte = $deporte;
        $this->actividad= $actividad;
    }

    public function getCode()
    {
        return $this->code;
    }

    public function setCode($code)
    {
        $this->code = $code;
    }
    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $code;
    }


  
}




   

?>   