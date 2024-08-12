export interface pago {
    id_pago: number;
    id_miembro: number;
    monto: number;
    fecha_pago: string; 
    tipo_pago: string;
    comprobante_url: string;
    estado: string;
}