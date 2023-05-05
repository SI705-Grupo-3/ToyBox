import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  questions = [
    { title: '¿Cuales son los canales de contacto?',answer: 'En la seccion de contacto se encuentra nuestros canales de contacto via correo y telefono.'},
    { title: '¿Cuál es el tiempo de entrega?', answer: 'El tiempo de entrega varía según la ubicación del cliente y el método de envío seleccionado.' },
    { title: '¿Cuáles son las formas de pago aceptadas?', answer: 'Aceptamos tarjetas de crédito y débito, transferencias bancarias y pagos en efectivo.' },
    { title: '¿Puedo devolver un producto?', answer: 'Sí, aceptamos devoluciones en un plazo de 30 días a partir de la fecha de entrega. Consulte nuestra política de devoluciones para obtener más información.' },
    { title: '¿Ofrecen descuentos para compras al por mayor?', answer: 'Sí, ofrecemos descuentos para compras al por mayor. Póngase en contacto con nuestro equipo de ventas para obtener más información.' },
    { title: '¿Como hacerme vendedor?',answer: 'En la seccion de registro existe una opcion para crear cuenta de vendedor, no se puede cambiar una cuenta de comprador a vendedor.'},
    { title: '¿Existe una comision por las ventas y compras?',answer: 'Por comprar no existe una comision, para poder vender tus productos si se cobra una pequena comision por el servicio.'}
  ];
}
