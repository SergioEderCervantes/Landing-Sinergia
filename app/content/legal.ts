/**
 * Contenido legal del sitio (Aviso de Privacidad y Términos y Condiciones).
 *
 * Es contenido compartido por todas las verticales: la persona/entidad
 * responsable es la misma sin importar desde qué vertical se consulte. Se
 * modela como datos estructurados para poder renderizarlo con un layout
 * consistente (`app/components/LegalDocument.tsx`) en lugar de HTML suelto.
 */

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'keyvalue'; pairs: { label: string; value: string }[] }
  | { type: 'definitions'; items: { term: string; desc: string }[] }

export interface LegalSection {
  /** Ancla usada para la tabla de contenidos. */
  id: string
  heading: string
  blocks: LegalBlock[]
}

export interface LegalDocument {
  title: string
  subtitle?: string
  note?: string
  updatedLabel?: string
  sections: LegalSection[]
}

const RESPONSABLE_CONTACTO: { label: string; value: string }[] = [
  { label: 'Nombre o denominación', value: 'SINERGIA MKT STUDIO Y SINERGIA SOFTWARE / SALVADOR OLIVARES MAURICIO' },
  { label: 'Nombre comercial', value: 'Sinergia Studio' },
  { label: 'Teléfonos', value: '449 396 3356 y 449 467 4370' },
  { label: 'Correo electrónico', value: 'agencia@sinergiastudiomkt.com' },
  { label: 'Instagram', value: '@sinergia.studio.mx y @sinergia.software' },
]

export const avisoPrivacidad: LegalDocument = {
  title: 'Aviso de Privacidad Integral',
  subtitle: 'Tratamiento de datos personales · Sitio web · Servicios · Software',
  note: 'Documento estructurado conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
  sections: [
    {
      id: 'objeto-y-alcance',
      heading: 'Objeto y alcance del aviso',
      blocks: [
        {
          type: 'p',
          text: 'SINERGIA, en adelante "LA AGENCIA", presta servicios profesionales relacionados con marketing, publicidad, producción de contenido, diseño, desarrollo tecnológico, desarrollo de sitios web y software, automatización, consultoría y demás servicios que, en su caso, sean expresamente acordados con EL CLIENTE.',
        },
        {
          type: 'p',
          text: 'El presente Aviso de Privacidad se pone a disposición de las personas titulares de forma electrónica desde el momento en que se recaban sus datos personales, con el objeto de informarles la existencia y las características principales del tratamiento, de conformidad con el artículo 14 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA tratará los datos personales observando los principios de licitud, finalidad, lealtad, consentimiento, calidad, proporcionalidad, información y responsabilidad establecidos en el artículo 5 de la Ley.',
        },
        {
          type: 'p',
          text: 'Cuando el tratamiento requiera consentimiento, éste se recabará mediante una manifestación libre, específica e informada en los términos previstos por la Ley. Tratándose de datos personales sensibles, el consentimiento deberá ser expreso y por escrito conforme al artículo 8.',
        },
      ],
    },
    {
      id: 'identidad-del-responsable',
      heading: 'I. Identidad y domicilio del responsable',
      blocks: [{ type: 'keyvalue', pairs: RESPONSABLE_CONTACTO }],
    },
    {
      id: 'datos-tratados',
      heading: 'II. Datos personales que serán sometidos a tratamiento',
      blocks: [
        { type: 'subheading', text: '2.1. Datos proporcionados directamente mediante el sitio web' },
        {
          type: 'p',
          text: 'LA AGENCIA podrá tratar los siguientes datos proporcionados directamente por la persona titular mediante el sitio web:',
        },
        {
          type: 'list',
          items: [
            'Nombre.',
            'Correo electrónico.',
            'Número de celular.',
            'Nombre de la marca o negocio.',
            'Descripción o historia de la marca.',
            'Sitio web.',
            'Presupuesto disponible.',
            'Medio por el cual conoció a LA AGENCIA.',
            'Vertical o sección del sitio web desde la cual se realizó la solicitud.',
            'Fecha y hora de envío del formulario.',
          ],
        },
        { type: 'subheading', text: '2.2. Datos técnicos y de navegación' },
        {
          type: 'p',
          text: 'Mediante tecnologías de seguimiento y servicios de terceros como Meta Pixel y Google Tag podrán tratarse datos técnicos y de navegación, incluyendo:',
        },
        {
          type: 'list',
          items: [
            'Dirección IP.',
            'Identificadores del dispositivo o navegador.',
            'Páginas y rutas de navegación visitadas.',
            'Interacciones realizadas con el sitio web y el formulario.',
            'Vertical consultada, número o etapa del formulario y categorías de contenido visualizadas.',
          ],
        },
        {
          type: 'subheading',
          text: '2.3. Acceso a cuentas, perfiles, plataformas y sitios web por servicios contratados',
        },
        {
          type: 'p',
          text: 'Dependiendo del plan, servicio, alcance o modalidad de contratación convenida entre EL CLIENTE y LA AGENCIA, podrá resultar necesario que EL CLIENTE otorgue acceso a perfiles, cuentas, páginas, plataformas, sitios web, sistemas o herramientas digitales relacionadas con su negocio.',
        },
        {
          type: 'p',
          text: 'Dicho acceso podrá comprender, de manera enunciativa mas no limitativa, perfiles o páginas de redes sociales, cuentas publicitarias, administradores comerciales, sitios web, gestores de contenido, plataformas de comercio electrónico, servicios de hosting, dominios, herramientas de medición, plataformas tecnológicas, sistemas de automatización u otros recursos necesarios para ejecutar los servicios contratados.',
        },
        {
          type: 'p',
          text: 'El sitio web público de SINERGIA no recaba ni trata directamente dichas credenciales, contraseñas o accesos como parte de su funcionamiento ordinario. Estos accesos se producen, en su caso, con posterioridad y como consecuencia de una relación contractual específica.',
        },
        {
          type: 'p',
          text: 'EL CLIENTE otorgará únicamente los permisos y accesos necesarios para la prestación del servicio. Cuando la plataforma lo permita, podrán utilizarse roles, administradores, usuarios autorizados o mecanismos equivalentes conforme a lo convenido entre las partes.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA utilizará dichos accesos únicamente en los términos, finalidades, alcances y condiciones convenidos con EL CLIENTE, guardará confidencialidad respecto de la información bajo su control y se abstendrá de realizar usos indebidos, no autorizados o ajenos a la ejecución del servicio.',
        },
        {
          type: 'p',
          text: 'Cuando el acceso permita consultar información, comunicaciones, bases de datos o datos personales de EL CLIENTE o de terceros, LA AGENCIA los utilizará únicamente en la medida necesaria para ejecutar los servicios contratados y conforme a las instrucciones y autorizaciones proporcionadas por EL CLIENTE.',
        },
        { type: 'subheading', text: '2.4. Datos tratados en servicios de software' },
        {
          type: 'p',
          text: 'Cuando EL CLIENTE contrate servicios de desarrollo, implementación, licencia, mantenimiento, soporte, automatización o administración de software, sistemas, plataformas o sitios web, podrá resultar necesario tratar datos personales adicionales a los recabados mediante el sitio web público de SINERGIA. Los datos concretos dependerán de las características, funcionalidades, finalidades y alcance del software contratado y de lo expresamente convenido entre EL CLIENTE y LA AGENCIA.',
        },
        {
          type: 'p',
          text: 'Cuando LA AGENCIA trate datos contenidos en un software por cuenta de EL CLIENTE y conforme a sus instrucciones, el tratamiento se limitará a la prestación del servicio contratado y al alcance establecido en el contrato, plan, licencia, propuesta comercial u otro instrumento aplicable.',
        },
        { type: 'subheading', text: 'Datos sensibles, financieros y patrimoniales' },
        {
          type: 'p',
          text: 'LA AGENCIA no recaba actualmente datos personales sensibles a través del sitio web público. Tampoco solicita, para la navegación o envío de formularios, contraseñas, datos bancarios, datos de tarjetas, información de pago ni demás información financiera. Si por la naturaleza de un software contratado llegaran a tratarse datos sensibles, financieros, patrimoniales o de otra categoría que requiera protección especial, dicho tratamiento deberá quedar expresamente contemplado en el servicio correspondiente. Para datos personales sensibles se requerirá el consentimiento expreso y por escrito de la persona titular en los términos del artículo 8 de la Ley.',
        },
        {
          type: 'p',
          text: 'Cuando EL CLIENTE determine qué datos incorpora a un software o plataforma y proporcione a LA AGENCIA acceso a ellos para ejecutar el servicio, EL CLIENTE deberá contar con las autorizaciones, avisos de privacidad, consentimientos y demás bases necesarias respecto de la información que decida proporcionar, almacenar o administrar. LA AGENCIA se limitará a utilizar dichos datos de manera confidencial y únicamente para el servicio contratado.',
        },
        {
          type: 'p',
          text: 'Las bases de datos que, conforme al servicio contratado, lleguen a contener datos personales sensibles únicamente deberán existir cuando su creación se encuentre justificada por finalidades legítimas, concretas y acordes con el servicio correspondiente.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA procurará que los datos personales contenidos en las bases bajo su control sean exactos, completos, correctos y actualizados para los fines para los cuales fueron recabados, en la medida en que EL CLIENTE o la persona titular los proporcione de esa manera.',
        },
        {
          type: 'p',
          text: 'Cuando los datos personales hayan dejado de ser necesarios para las finalidades que motivaron su tratamiento, deberán ser suprimidos previo bloqueo, en su caso, una vez concluido el plazo de conservación aplicable, incluyendo el que corresponda conforme al contrato, de acuerdo con el artículo 10 de la Ley.',
        },
      ],
    },
    {
      id: 'finalidades',
      heading: 'III. Finalidades del tratamiento de datos personales',
      blocks: [
        {
          type: 'p',
          text: 'El tratamiento se limitará a los datos que resulten necesarios, adecuados y relevantes para las finalidades previstas en este Aviso de Privacidad, conforme al artículo 12 de la Ley.',
        },
        { type: 'subheading', text: '3.1. Finalidades necesarias para atender solicitudes y prestar servicios' },
        {
          type: 'list',
          items: [
            'Atender solicitudes de información y contacto, incluyendo mensajes, solicitudes de cotización, evaluaciones o consultas realizadas por los usuarios.',
            'Dar seguimiento comercial a posibles clientes para explicar los servicios de SINERGIA, elaborar propuestas, cotizaciones o planes personalizados y dar continuidad a una solicitud previamente realizada por la persona titular.',
            'Prestar los servicios contratados, incluyendo, según el plan correspondiente, marketing, publicidad, producción de contenido, diseño, administración de campañas publicitarias, desarrollo de sitios web, desarrollo de software, automatización, consultoría y demás servicios expresamente convenidos con EL CLIENTE.',
            'Administrar campañas y plataformas digitales cuando EL CLIENTE haya autorizado a LA AGENCIA el acceso a perfiles, cuentas publicitarias, páginas, sitios web, sistemas o herramientas necesarias para ejecutar el servicio contratado.',
            'Dar atención y soporte a clientes, incluyendo aclaraciones, seguimiento de proyectos, coordinación de entregables, correcciones, incidencias y demás comunicaciones necesarias para la correcta prestación del servicio.',
            'Cumplir obligaciones contractuales, administrativas o legales derivadas de la relación entre EL CLIENTE y LA AGENCIA.',
          ],
        },
        {
          type: 'subheading',
          text: '3.2. Finalidades sujetas al consentimiento de la persona titular cuando no sean estrictamente necesarias',
        },
        {
          type: 'p',
          text: 'Cuando estas actividades no resulten estrictamente necesarias para atender una solicitud o prestar un servicio contratado, LA AGENCIA las realizará mediante los mecanismos de consentimiento habilitados en el sitio:',
        },
        {
          type: 'list',
          items: [
            'Medir y optimizar campañas publicitarias mediante el análisis de visitas, interacciones, conversiones, desempeño de anuncios y demás información técnica utilizada para evaluar y mejorar campañas de SINERGIA o de sus clientes.',
            'Realizar actividades de remarketing o seguimiento publicitario mediante herramientas como Meta Pixel y Google Tag.',
            'Realizar nuevas campañas publicitarias, prospección comercial o finalidades comerciales distintas de aquellas necesarias para atender una solicitud o prestar un servicio contratado.',
          ],
        },
        { type: 'subheading', text: '3.3. Finalidades específicas en servicios de software' },
        {
          type: 'p',
          text: 'Dependiendo del sistema o servicio contratado, los datos personales podrán utilizarse para las siguientes actividades, siempre dentro del alcance expresamente convenido con EL CLIENTE:',
        },
        {
          type: 'list',
          items: [
            'Crear y administrar usuarios dentro del sistema, incluyendo altas, bajas, perfiles, permisos, roles y accesos.',
            'Identificar y autenticar usuarios cuando el software requiera mecanismos de inicio de sesión o control de acceso.',
            'Registrar, organizar, consultar, actualizar o eliminar información necesaria para el funcionamiento del sistema contratado.',
            'Gestionar clientes, prospectos, colaboradores, usuarios u otros registros cuando el software incluya funciones de CRM, administración o seguimiento.',
            'Gestionar citas, solicitudes, registros, inscripciones, reservaciones, pedidos, servicios o procesos similares cuando formen parte del sistema contratado.',
            'Automatizar procesos y comunicaciones, incluyendo correos electrónicos, mensajes, recordatorios, notificaciones o avisos relacionados con las funciones del software.',
            'Integrar el software con plataformas o servicios de terceros mediante APIs, herramientas de mensajería, servicios de correo electrónico, plataformas de publicidad, sistemas de pago, almacenamiento u otras tecnologías, cuando dichas integraciones hayan sido contratadas o autorizadas por EL CLIENTE.',
            'Generar reportes, estadísticas, paneles de control o métricas para que EL CLIENTE consulte y administre la información contenida en el sistema.',
            'Importar, migrar, exportar o respaldar información cuando sea necesario para implementar, actualizar, trasladar o conservar adecuadamente el sistema.',
            'Realizar mantenimiento, soporte técnico y solución de incidencias cuando para identificar o corregir una falla sea necesario acceder temporalmente a información contenida en el software.',
            'Registrar eventos técnicos, accesos o actividad del sistema cuando sea necesario para su funcionamiento, seguridad, trazabilidad o diagnóstico.',
            'Realizar respaldos y recuperación de información conforme a las características técnicas y condiciones del servicio contratado.',
            'Implementar medidas de seguridad y control de acceso, incluyendo prevención, detección y atención de accesos no autorizados, errores, vulnerabilidades o incidentes relacionados con el sistema.',
            'Probar, configurar, actualizar o implementar funcionalidades utilizando únicamente los datos necesarios para dichas actividades.',
            'Ejecutar automatizaciones, flujos de trabajo o procesos internos expresamente solicitados o autorizados por EL CLIENTE.',
            'Utilizar servidores o plataformas destinados al desarrollo, operación y prestación de los productos y servicios contratados, en la medida necesaria para ejecutar el servicio.',
          ],
        },
        {
          type: 'p',
          text: 'LA AGENCIA deberá abstenerse de utilizar los datos personales contenidos en los sistemas de EL CLIENTE para finalidades propias o distintas de las necesarias para ejecutar el servicio contratado, salvo que exista una autorización válida o que el tratamiento se encuentre permitido por la Ley.',
        },
        {
          type: 'p',
          text: 'El acceso de LA AGENCIA a los datos contenidos en un software se limitará al personal, colaboradores o proveedores que razonablemente necesiten dicho acceso para prestar el servicio correspondiente, conforme a las obligaciones de confidencialidad y seguridad aplicables.',
        },
        {
          type: 'p',
          text: 'La contratación de un servicio de software no autoriza a LA AGENCIA a utilizar libremente la información almacenada en el sistema. El tratamiento quedará limitado a las actividades necesarias para desarrollar, implementar, operar, mantener, soportar o mejorar técnicamente el servicio contratado, conforme a las instrucciones y condiciones acordadas con EL CLIENTE.',
        },
        { type: 'subheading', text: 'Limitación por finalidad' },
        {
          type: 'p',
          text: 'LA AGENCIA no utilizará los datos personales para finalidades distintas o incompatibles con aquellas informadas en este Aviso. Si pretendiera tratarlos para una finalidad distinta, deberá obtener nuevamente el consentimiento de la persona titular cuando así corresponda. En todos los casos se utilizará únicamente la información necesaria para la actividad correspondiente.',
        },
      ],
    },
    {
      id: 'opciones-para-limitar',
      heading: 'IV. Opciones y medios para limitar el uso o divulgación de los datos personales',
      blocks: [
        { type: 'subheading', text: '4.1. Cookies y tecnologías de seguimiento' },
        {
          type: 'p',
          text: 'El sitio web de LA AGENCIA cuenta con un mecanismo de gestión de cookies mediante el cual EL USUARIO puede aceptar o rechazar el uso de cookies y tecnologías de seguimiento que no sean estrictamente necesarias para el funcionamiento del sitio. Mientras EL USUARIO no otorgue su consentimiento, o si lo rechaza, no se cargan ni ejecutan Meta Pixel ni Google Tag y no se instalan sus cookies. EL USUARIO puede cambiar su elección en cualquier momento desde el enlace "Preferencias de cookies" del pie de página, y LA AGENCIA respetará la elección conforme a la configuración y funcionalidades disponibles en el sitio web.',
        },
        {
          type: 'p',
          text: 'El sitio web utiliza tecnologías de terceros, incluyendo Meta Pixel y Google Tag, para obtener información técnica y de navegación relacionada con la medición y optimización de publicidad. Las personas titulares también podrán utilizar las configuraciones de privacidad, publicidad y cookies disponibles en sus navegadores y en las plataformas de terceros para limitar determinados mecanismos de seguimiento.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA podrá implementar adicionalmente mecanismos tecnológicos dentro del sitio web que permitan administrar o limitar el uso de cookies o tecnologías de seguimiento cuando dichos mecanismos se encuentren disponibles.',
        },
        { type: 'subheading', text: '4.2. Limitación en planes y servicios contratados' },
        {
          type: 'p',
          text: 'LA AGENCIA pone a disposición de las personas titulares mecanismos para solicitar la limitación del uso o divulgación de sus datos personales cuando éstos no sean necesarios para el cumplimiento de una relación contractual, obligación legal o prestación de un servicio solicitado.',
        },
        {
          type: 'list',
          items: [
            'Solicitar que sus datos no sean utilizados para actividades de prospección comercial, seguimiento de ventas o envío de información sobre servicios que no haya solicitado.',
            'Solicitar que sus datos no sean utilizados para nuevas campañas publicitarias o finalidades comerciales distintas de aquellas necesarias para atender su solicitud o prestar un servicio contratado.',
            'Solicitar la limitación del acceso a sus datos por parte del personal de LA AGENCIA cuando dicho acceso no sea necesario para la prestación del servicio correspondiente.',
            'Solicitar que determinados datos, accesos, perfiles, cuentas, sistemas o información proporcionada con motivo de un servicio contratado sean utilizados exclusivamente para las actividades expresamente convenidas en el contrato correspondiente.',
            'Solicitar que, una vez concluido el servicio y cuando legal y técnicamente proceda, se deje de utilizar determinada información proporcionada para su ejecución, sin perjuicio de aquella que deba conservarse por obligaciones contractuales, administrativas, legales o para la defensa de derechos de cualquiera de las partes.',
          ],
        },
        {
          type: 'p',
          text: 'La solicitud podrá presentarse mediante cualquiera de los medios de contacto de SINERGIA y deberá permitir identificar razonablemente a la persona titular y señalar de forma clara qué uso o divulgación desea limitar. LA AGENCIA analizará la solicitud y, cuando resulte procedente, adoptará las medidas necesarias para que los datos dejen de utilizarse para la finalidad correspondiente.',
        },
        {
          type: 'p',
          text: 'La limitación no impedirá los tratamientos que sean necesarios para ejecutar un servicio expresamente solicitado o contratado. Cuando EL CLIENTE haya contratado administración de campañas publicitarias, desarrollo o mantenimiento de software, gestión de redes sociales, desarrollo web, automatizaciones u otros servicios que requieran acceso a información, LA AGENCIA podrá continuar utilizando únicamente los datos y accesos necesarios mientras el servicio se encuentre vigente. EL CLIENTE podrá solicitar que el tratamiento se limite a las finalidades, personal autorizado, sistemas y actividades previstas en el contrato correspondiente.',
        },
      ],
    },
    {
      id: 'derechos-arco',
      heading: 'V. Mecanismos, medios y procedimientos para ejercer los derechos ARCO',
      blocks: [
        {
          type: 'p',
          text: 'La persona titular o su representante legal podrá ejercer en cualquier momento los derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) respecto de los datos personales que le conciernen y que se encuentren en posesión de LA AGENCIA.',
        },
        {
          type: 'definitions',
          items: [
            { term: 'Acceso', desc: 'Conocer los datos personales que obran en posesión de LA AGENCIA y las condiciones generales de su tratamiento.' },
            { term: 'Rectificación', desc: 'Solicitar la corrección o actualización de datos inexactos, incompletos o desactualizados.' },
            { term: 'Cancelación', desc: 'Solicitar, cuando proceda conforme a la Ley, la cancelación de datos de archivos, registros, expedientes o sistemas.' },
            { term: 'Oposición', desc: 'Solicitar, por causa legítima y cuando proceda conforme a la Ley, que cese un tratamiento específico.' },
          ],
        },
        { type: 'subheading', text: '5.1. Medio para presentar la solicitud' },
        {
          type: 'p',
          text: 'La solicitud podrá enviarse al correo electrónico agencia@sinergiastudiomkt.com. Las solicitudes serán tramitadas por la persona o departamento que LA AGENCIA designe para la atención de datos personales.',
        },
      ],
    },
    {
      id: 'cambios-al-aviso',
      heading: 'VI. Procedimiento y medio para comunicar cambios al Aviso de Privacidad',
      blocks: [
        { type: 'p', text: 'LA AGENCIA podrá modificar o actualizar el presente Aviso de Privacidad cuando resulte necesario.' },
        {
          type: 'p',
          text: 'Cualquier cambio será publicado en el sitio web de SINERGIA y podrá ser comunicado a LOS CLIENTES a través de cualquiera de los medios de contacto de LA AGENCIA, incluyendo correo electrónico, mensajería instantánea, redes sociales, página web o cualquier otro medio habitualmente utilizado entre las partes.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA procurará informar a LOS CLIENTES sobre las modificaciones realizadas para que puedan conocer la versión vigente del Aviso de Privacidad.',
        },
      ],
    },
    {
      id: 'anexo-simplificado',
      heading: 'Anexo · Aviso de Privacidad simplificado para el formulario electrónico',
      blocks: [
        {
          type: 'p',
          text: 'Este texto resume la información esencial que deberá mostrarse al momento de recabar datos por medios electrónicos y remite al Aviso de Privacidad integral.',
        },
        { type: 'subheading', text: 'Responsable' },
        {
          type: 'p',
          text: 'SINERGIA / LA AGENCIA. Nombre o denominación: SINERGIA MKT STUDIO Y SINERGIA SOFTWARE / SALVADOR OLIVARES MAURICIO.',
        },
        {
          type: 'p',
          text: 'Datos tratados: nombre, correo electrónico, nombre e historia de la marca o negocio, sitio web, presupuesto disponible, medio por el cual conoció a LA AGENCIA, sección o vertical de origen, fecha y hora de envío; así como datos técnicos y de navegación mediante cookies y tecnologías de seguimiento. El sitio público no recaba actualmente datos personales sensibles.',
        },
        {
          type: 'p',
          text: 'Finalidades: atender solicitudes de información y contacto, dar seguimiento a solicitudes comerciales, elaborar propuestas o cotizaciones y, cuando corresponda, prestar los servicios contratados. Las finalidades de medición publicitaria, optimización y remarketing mediante tecnologías no estrictamente necesarias estarán sujetas a la elección de cookies del usuario.',
        },
        {
          type: 'p',
          text: 'Opciones para limitar el tratamiento: al ingresar al sitio, EL USUARIO podrá aceptar o rechazar cookies y tecnologías de seguimiento que no sean estrictamente necesarias.',
        },
        {
          type: 'p',
          text: 'El Aviso de Privacidad integral podrá consultarse en el apartado "Aviso de Privacidad" del sitio web de SINERGIA.',
        },
      ],
    },
  ],
}

export const terminosCondiciones: LegalDocument = {
  title: 'Términos y Condiciones',
  subtitle: 'Sinergia Studio',
  sections: [
    {
      id: 'identificacion-de-la-empresa',
      heading: 'Identificación de la empresa',
      blocks: [
        {
          type: 'p',
          text: 'Para efectos de los presentes Términos y Condiciones, SINERGIA, en adelante "LA AGENCIA", es un proveedor de servicios profesionales relacionados con marketing, publicidad, producción de contenido, diseño, desarrollo tecnológico, desarrollo de sitios web y software, automatización, consultoría y demás servicios que, en su caso, sean expresamente acordados con EL CLIENTE.',
        },
        {
          type: 'p',
          text: 'Los servicios específicos que serán prestados a cada CLIENTE, así como su alcance, características, entregables, duración, precio y demás condiciones particulares, serán aquellos establecidos en el contrato, propuesta comercial, cotización, plan u orden de servicio correspondiente. La inclusión de una categoría de servicios en los presentes Términos y Condiciones no implica que todos ellos formen parte de una contratación determinada.',
        },
        { type: 'subheading', text: 'Datos de identificación y contacto de LA AGENCIA' },
        { type: 'keyvalue', pairs: RESPONSABLE_CONTACTO },
        {
          type: 'p',
          text: 'Los anteriores medios, además de la página web, podrán ser utilizados por EL CLIENTE para solicitar información, aclaraciones o presentar reclamaciones relacionadas con los servicios de LA AGENCIA.',
        },
      ],
    },
    {
      id: 'vigencia-y-modificacion',
      heading: 'Vigencia, actualización y modificación de los Términos y Condiciones',
      blocks: [
        {
          type: 'p',
          text: 'Los presentes Términos y Condiciones serán aplicables a partir de la fecha de creación y publicación inicial del sitio web de LA AGENCIA, y permanecerán vigentes mientras se encuentren disponibles a través de dicho medio, sin perjuicio de las condiciones particulares que hayan sido expresamente convenidas con cada CLIENTE mediante contrato, propuesta comercial, cotización, plan u orden de servicio.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA podrá actualizar o modificar los presentes Términos y Condiciones cuando existan cambios en las circunstancias bajo las cuales presta sus servicios, incluyendo modificaciones en sus servicios, modalidades de contratación, procesos operativos, herramientas tecnológicas, proveedores externos, condiciones comerciales, disposiciones legales o regulatorias, o cualquier otra circunstancia que haga necesaria su actualización.',
        },
        {
          type: 'p',
          text: 'Las modificaciones serán publicadas en el sitio web de LA AGENCIA y, cuando puedan afectar las condiciones aplicables a CLIENTES que mantengan una relación contractual vigente, serán comunicadas adicionalmente a través de alguno de los medios de contacto proporcionados por EL CLIENTE, tales como correo electrónico, mensajería instantánea, comunicación escrita o cualquier otro medio habitualmente utilizado entre las partes.',
        },
        {
          type: 'p',
          text: 'El plazo de aviso y la fecha de entrada en vigor de las modificaciones podrán variar de acuerdo con el plan, servicio, modalidad de contratación o periodo de renovación correspondiente a cada CLIENTE, conforme a las condiciones particulares previamente convenidas.',
        },
        {
          type: 'p',
          text: 'Cuando una modificación implique cambios a derechos, obligaciones, precios, alcances, plazos o demás condiciones previamente pactadas en una relación contractual vigente, dicha modificación no se aplicará unilateralmente durante el periodo ya contratado. Su aplicación requerirá, cuando corresponda, el acuerdo de EL CLIENTE y LA AGENCIA, o podrá surtir efectos a partir del siguiente periodo de contratación o renovación, conforme a las condiciones del plan correspondiente y a la legislación aplicable.',
        },
        {
          type: 'p',
          text: 'Las modificaciones que únicamente correspondan a actualizaciones informativas, aclaraciones, correcciones, cambios técnicos del sitio web o adecuaciones que no alteren los derechos u obligaciones previamente contratados podrán entrar en vigor desde su publicación.',
        },
        {
          type: 'p',
          text: 'La versión actualizada de los Términos y Condiciones indicará la fecha de su última actualización. La continuidad o renovación de los servicios se sujetará a las condiciones aplicables al periodo correspondiente, siempre respetando los derechos previamente adquiridos y las disposiciones de la legislación aplicable.',
        },
      ],
    },
    {
      id: 'condiciones-de-uso-del-sitio',
      heading: 'Condiciones y limitaciones de uso del sitio web',
      blocks: [
        {
          type: 'p',
          text: 'El presente sitio web tiene como finalidad proporcionar a los usuarios información relacionada con LA AGENCIA, sus servicios, planes, soluciones, proyectos, medios de contacto y demás actividades comerciales, así como facilitar, cuando corresponda, la solicitud de información, cotizaciones, contacto comercial y contratación de los servicios ofrecidos por LA AGENCIA.',
        },
        {
          type: 'p',
          text: 'El acceso y navegación por el sitio web atribuyen a quien lo utiliza la calidad de USUARIO, quien deberá hacer uso del sitio, sus contenidos y funcionalidades de manera lícita, responsable y conforme a los presentes Términos y Condiciones y a la legislación aplicable.',
        },
        {
          type: 'p',
          text: 'El acceso al sitio web no implica por sí mismo la celebración de un contrato entre EL USUARIO y LA AGENCIA. La contratación de servicios se perfeccionará únicamente cuando exista aceptación de las condiciones particulares correspondientes mediante contrato, propuesta comercial, cotización, plan, orden de servicio o cualquier otro mecanismo de contratación expresamente convenido entre las partes.',
        },
      ],
    },
    {
      id: 'edad-y-capacidad',
      heading: 'Edad y capacidad para contratar',
      blocks: [
        {
          type: 'p',
          text: 'La información pública disponible en el sitio web podrá ser consultada por los usuarios en términos de estos Términos y Condiciones.',
        },
        {
          type: 'p',
          text: 'No obstante, la contratación directa de servicios ofrecidos por LA AGENCIA deberá realizarse por personas mayores de dieciocho años con capacidad legal suficiente para obligarse, o, tratándose de personas morales, por quien cuente con facultades suficientes para actuar en su representación.',
        },
        {
          type: 'p',
          text: 'Cuando una persona menor de edad pretenda contratar algún servicio, deberá hacerlo por conducto de quien ejerza legalmente su representación o cuente con facultades suficientes para ello.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA podrá solicitar la información razonablemente necesaria para verificar la identidad o capacidad de quien pretenda contratar sus servicios cuando ello resulte necesario para la formalización de la relación correspondiente.',
        },
      ],
    },
    {
      id: 'usos-permitidos',
      heading: 'Usos permitidos del sitio web',
      blocks: [
        { type: 'p', text: 'EL USUARIO podrá utilizar el sitio web exclusivamente para fines lícitos relacionados con:' },
        {
          type: 'list',
          items: [
            'Conocer la identidad, actividades y servicios ofrecidos por LA AGENCIA.',
            'Consultar información relacionada con marketing, publicidad, producción de contenido, tecnología, software, desarrollo web, automatización y demás servicios que LA AGENCIA ofrezca.',
            'Solicitar información, cotizaciones o propuestas comerciales.',
            'Contactar a LA AGENCIA mediante los medios habilitados para ello.',
            'Iniciar o continuar un proceso de contratación.',
            'Consultar información, contenidos, materiales o recursos que LA AGENCIA haya puesto expresamente a disposición del público.',
            'Utilizar las funcionalidades del sitio conforme a la finalidad para la cual hayan sido habilitadas.',
          ],
        },
        {
          type: 'p',
          text: 'El acceso al sitio web otorga únicamente una autorización limitada para su consulta y utilización conforme a estas finalidades y no implica la transmisión de derechos de propiedad intelectual, industrial o de cualquier otra naturaleza a favor de EL USUARIO.',
        },
      ],
    },
    {
      id: 'conductas-no-permitidas',
      heading: 'Restricciones y conductas no permitidas',
      blocks: [
        {
          type: 'p',
          text: 'Queda prohibido utilizar el sitio web, sus contenidos, sistemas o funcionalidades para realizar actividades ilícitas, fraudulentas, engañosas, abusivas o contrarias a los presentes Términos y Condiciones.',
        },
        { type: 'p', text: 'De manera enunciativa mas no limitativa, EL USUARIO deberá abstenerse de:' },
        {
          type: 'list',
          items: [
            'Utilizar el sitio web para fines distintos de aquellos para los cuales fue puesto a disposición.',
            'Copiar, reproducir, distribuir, comercializar, publicar, comunicar, modificar, adaptar o explotar contenidos propiedad de LA AGENCIA sin contar con autorización, salvo aquellos usos expresamente permitidos por la legislación aplicable.',
            'Utilizar contenidos del sitio para crear productos, servicios, materiales publicitarios, páginas web, sistemas o contenidos derivados que aparenten estar relacionados, autorizados o respaldados por LA AGENCIA sin autorización.',
            'Suplantar la identidad de LA AGENCIA, sus integrantes, colaboradores, clientes, representantes o cualquier tercero.',
            'Utilizar el nombre, identidad gráfica o elementos distintivos de LA AGENCIA de manera que pueda generar confusión respecto de la existencia de una relación comercial, autorización, patrocinio, asociación o representación que no exista.',
            'Introducir, distribuir o intentar incorporar virus, malware, código malicioso, herramientas automatizadas o cualquier elemento destinado a afectar la disponibilidad, seguridad, funcionamiento o integridad del sitio web.',
            'Intentar acceder sin autorización a áreas restringidas, servidores, cuentas, bases de datos, sistemas, código, configuraciones, credenciales o infraestructura utilizada por LA AGENCIA.',
            'Intentar vulnerar, eludir o desactivar mecanismos de autenticación, seguridad, control de acceso o protección tecnológica.',
            'Realizar actividades de ingeniería inversa, descompilación, extracción, modificación o reproducción de software o sistemas propiedad de LA AGENCIA, salvo en aquellos casos expresamente permitidos por la legislación aplicable o por una licencia otorgada por escrito.',
            'Recabar de manera automatizada, masiva o no autorizada información del sitio web cuando dicha actividad afecte su funcionamiento, vulnere derechos de LA AGENCIA o de terceros, o tenga como finalidad explotar comercialmente su contenido sin autorización.',
            'Publicar, transmitir o proporcionar mediante los formularios, medios de contacto o funcionalidades del sitio información falsa, ilícita, fraudulenta, amenazante, discriminatoria, difamatoria, violenta, maliciosa o que infrinja derechos de terceros.',
            'Utilizar el sitio web para realizar actos que vulneren derechos de propiedad intelectual, propiedad industrial, privacidad, protección de datos personales o cualquier otro derecho reconocido por la legislación aplicable.',
            'Utilizar los contenidos, recursos o sistemas de LA AGENCIA para desarrollar, reproducir o comercializar servicios que impliquen la apropiación o utilización no autorizada de recursos protegidos de LA AGENCIA.',
          ],
        },
      ],
    },
    {
      id: 'propiedad-de-la-marca',
      heading: 'Propiedad de la marca y signos distintivos',
      blocks: [
        {
          type: 'p',
          text: 'El nombre comercial SINERGIA, su identidad gráfica, logotipos, denominaciones, elementos visuales, eslóganes y demás signos distintivos que correspondan a LA AGENCIA se encuentran reservados para su utilización por LA AGENCIA, conforme a los derechos que legalmente le correspondan respecto de cada elemento.',
        },
        {
          type: 'p',
          text: 'El acceso al sitio web o la contratación de un servicio no otorgan a EL USUARIO o EL CLIENTE autorización, licencia o derecho alguno para utilizar la marca, nombre comercial, logotipo, identidad gráfica o demás signos distintivos de LA AGENCIA, salvo que exista autorización expresa.',
        },
        { type: 'p', text: 'En consecuencia, no podrán utilizarse dichos elementos, entre otros fines, para:' },
        {
          type: 'list',
          items: [
            'Identificar productos o servicios ajenos como si fueran proporcionados por LA AGENCIA.',
            'Registrar o utilizar nombres comerciales, marcas, nombres de dominio, perfiles, cuentas o identificadores que reproduzcan o puedan generar confusión con los signos distintivos de LA AGENCIA.',
            'Incorporarlos en publicidad, sitios web, redes sociales, materiales comerciales, presentaciones, productos o servicios de terceros sin autorización.',
            'Modificar, alterar, deformar o utilizar la identidad de LA AGENCIA de manera que pueda afectar su reputación, identificación o carácter distintivo.',
            'Manifestar o hacer parecer que existe colaboración, representación, certificación, patrocinio o relación comercial con LA AGENCIA cuando ésta no haya sido autorizada.',
          ],
        },
        {
          type: 'p',
          text: 'Cualquier autorización para utilizar signos distintivos de LA AGENCIA deberá establecer, cuando corresponda, su finalidad, alcance, duración, medios autorizados y demás condiciones de uso.',
        },
      ],
    },
    {
      id: 'propiedad-de-contenidos',
      heading: 'Propiedad de los elementos y contenidos del sitio web',
      blocks: [
        {
          type: 'p',
          text: 'Salvo que expresamente se indique lo contrario, los contenidos y elementos desarrollados y de titularidad de LA AGENCIA que formen parte del sitio web, incluyendo textos, diseños, composiciones gráficas, fotografías propias, videos propios, ilustraciones, interfaces, estructuras, recursos audiovisuales, documentos, metodologías, códigos, software, sistemas, herramientas, elementos gráficos y demás materiales originales, permanecerán bajo la titularidad de LA AGENCIA en los términos reconocidos por la legislación aplicable.',
        },
        {
          type: 'p',
          text: 'Ningún contenido disponible en el sitio web podrá interpretarse como una cesión o transmisión automática de derechos a favor de EL USUARIO.',
        },
        {
          type: 'p',
          text: 'EL USUARIO podrá visualizar y consultar dichos contenidos exclusivamente para conocer LA AGENCIA y los servicios que ésta ofrece, salvo que expresamente se autorice algún uso adicional.',
        },
        {
          type: 'p',
          text: 'Cualquier reproducción, adaptación, distribución, explotación comercial, publicación, modificación o utilización distinta requerirá autorización previa de LA AGENCIA cuando legalmente corresponda, sin perjuicio de las limitaciones, excepciones y usos permitidos expresamente por la legislación aplicable.',
        },
      ],
    },
    {
      id: 'contenidos-de-terceros',
      heading: 'Contenidos, marcas y recursos de terceros',
      blocks: [
        {
          type: 'p',
          text: 'El sitio web podrá contener marcas, logotipos, fotografías, videos, diseños, tipografías, software, librerías, herramientas, plataformas, enlaces, materiales o recursos pertenecientes a clientes, proveedores u otros terceros.',
        },
        {
          type: 'p',
          text: 'La inclusión de dichos elementos en el sitio web no implica que sean propiedad de LA AGENCIA ni otorga a EL USUARIO derechos sobre ellos.',
        },
        {
          type: 'p',
          text: 'Cada elemento perteneciente a terceros conservará la titularidad, licencia y condiciones de uso que correspondan a su respectivo titular.',
        },
        {
          type: 'p',
          text: 'Las marcas o materiales de clientes que aparezcan, en su caso, como parte de portafolios, referencias, proyectos o casos de éxito serán utilizados por LA AGENCIA conforme a las autorizaciones que correspondan y su inclusión no autoriza a terceros a reproducirlos o utilizarlos.',
        },
      ],
    },
    {
      id: 'contratacion-y-precio',
      heading: 'Forma de contratación, precio, plan personalizado y cargos adicionales',
      blocks: [
        {
          type: 'p',
          text: 'Antes de la prestación de un servicio, LA AGENCIA deberá presentar un presupuesto por escrito. El presupuesto deberá describir las características del servicio, el costo de las modificaciones y su vigencia, independientemente de que se estipulen mecanismos de variación respecto de rubros específicos cuyas cotizaciones se encuentren fuera del control del proveedor.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA informará y respetará los precios, tarifas, garantías, cantidades, calidades, medidas, cargos, términos, restricciones, plazos, fechas, modalidades, reservaciones y demás condiciones aplicables a la comercialización de sus bienes, productos o servicios, de conformidad con las condiciones y modalidades convenidas entre EL CLIENTE y LA AGENCIA.',
        },
        {
          type: 'p',
          text: 'EL CLIENTE tendrá derecho a conocer toda la información relativa a los términos, condiciones, costos, cargos adicionales y, en su caso, formas de pago de los bienes y servicios ofrecidos por LA AGENCIA.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA informará de manera clara, visible y previa a la contratación el monto total correspondiente al plan personalizado de EL CLIENTE. Los costos de campañas, software y servicios adicionales se sujetarán a las condiciones previamente acordadas, incluyendo, en su caso, impuestos, comisiones u otros cargos aplicables. Los costos determinados por terceros podrán variar conforme a sus propias tarifas, políticas o condiciones, sin responsabilidad para LA AGENCIA.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA determinará el precio de sus servicios de acuerdo con el plan, paquete o propuesta comercial personalizada que corresponda a cada cliente, atendiendo a los servicios específicamente contratados, su alcance, duración y características. El precio, la periodicidad de pago y los conceptos incluidos serán informados a EL CLIENTE de manera clara, cierta, completa, visible y previa a la contratación, en cumplimiento de la legislación aplicable, incluida la Ley Federal de Protección al Consumidor (LFPC).',
        },
        {
          type: 'p',
          text: 'El importe correspondiente a los servicios propios de LA AGENCIA será independiente de los costos, tarifas, comisiones o cargos establecidos y cobrados por terceros que resulten necesarios para la ejecución de determinados servicios, tales como, de manera enunciativa mas no limitativa, Meta, Google, proveedores de dominios, servicios de hosting, servidores, plataformas de software, sistemas de automatización, servicios de mensajería, aplicaciones, APIs u otras herramientas tecnológicas.',
        },
        {
          type: 'p',
          text: 'Cuando la contratación o utilización de dichos servicios de terceros haya sido acordada como parte del proyecto, LA AGENCIA informará a EL CLIENTE, antes de su contratación, si el costo correspondiente se encuentra incluido en el precio del servicio de LA AGENCIA o si deberá ser cubierto adicionalmente por EL CLIENTE.',
        },
        {
          type: 'p',
          text: 'Los costos de terceros que no formen parte de los honorarios de LA AGENCIA serán responsabilidad de EL CLIENTE cuando así se haya establecido en la propuesta comercial, contrato, cotización u orden de servicio correspondiente. Dichos costos podrán variar como consecuencia de modificaciones efectuadas directamente por el proveedor tercero, incluyendo cambios en sus tarifas, planes, comisiones, políticas comerciales, condiciones de uso, consumo del servicio, tipo de cambio o cualquier otro factor ajeno al control de LA AGENCIA.',
        },
        {
          type: 'p',
          text: 'En caso de que LA AGENCIA realice por cuenta de EL CLIENTE el pago de servicios de terceros, dicho importe será identificado y desglosado de manera independiente de los honorarios de LA AGENCIA, y EL CLIENTE deberá cubrirlo en los términos y fechas previamente acordados.',
        },
        {
          type: 'p',
          text: 'Los precios de los servicios de LA AGENCIA indicarán expresamente si incluyen o no el Impuesto al Valor Agregado (IVA). Cuando legalmente corresponda trasladarlo, este será desglosado y cobrado adicionalmente al precio señalado, de conformidad con las disposiciones fiscales aplicables.',
        },
        {
          type: 'p',
          text: 'Asimismo, cualquier concepto adicional que pueda generar un costo para EL CLIENTE, incluyendo impuestos, comisiones, intereses, seguros, gastos de operación o cualquier otra erogación relacionada con el servicio, será informado por LA AGENCIA mediante el contrato, comunicación verbal, cotización u orden de servicio correspondiente, cuando dicho concepto sea determinable al momento de la contratación.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA podrá modificar los honorarios o las condiciones económicas únicamente cuando dicha posibilidad se encuentre expresamente pactada y la modificación sea acordada con EL CLIENTE. Cualquier modificación al precio, alcance, periodicidad o características de los servicios propios de LA AGENCIA deberá ser comunicada a EL CLIENTE y, cuando corresponda, aceptada previamente por este.',
        },
        {
          type: 'p',
          text: 'Lo anterior no será aplicable a las variaciones de precio, tarifas o cargos determinados directamente por proveedores terceros respecto de servicios que estos presten a EL CLIENTE, siempre que dichos conceptos hayan sido previamente identificados como cargos externos a los honorarios de LA AGENCIA.',
        },
      ],
    },
    {
      id: 'pago-anticipado',
      heading: 'Pago anticipado de servicios mensuales',
      blocks: [
        {
          type: 'p',
          text: 'Independientemente del tipo de servicio, plan, cotización o precio contratado, EL CLIENTE deberá cubrir mensualmente y por adelantado los servicios de LA AGENCIA, conforme a la periodicidad y fecha de pago establecidas en el contrato. La firma del contrato constituye el consentimiento expreso de EL CLIENTE para que los pagos correspondientes a cada periodo mensual sean realizados con anterioridad a la prestación de los servicios de dicho periodo.',
        },
      ],
    },
    {
      id: 'recibos-de-pago',
      heading: 'Recibos de pago mensuales',
      blocks: [
        {
          type: 'p',
          text: 'LA AGENCIA tiene la obligación de entregar al consumidor factura, recibo o comprobante en el que consten los datos específicos del servicio prestado u operación realizada, de acuerdo con el plan de cada cliente y siempre que este cumpla con sus obligaciones contractuales.',
        },
      ],
    },
    {
      id: 'publicidad-de-terceros',
      heading: 'Publicidad de terceros y atención al consumidor',
      blocks: [
        {
          type: 'p',
          text: 'LA AGENCIA podrá desarrollar, administrar y difundir contenido publicitario para marcas, empresas o proveedores terceros. Su intervención se limita a la creación, gestión y difusión de dicho contenido, por lo que no será responsable de proporcionar información comercial, técnica, contractual o de atención al consumidor respecto de los productos o servicios anunciados, ni de las operaciones que se celebren directamente entre el consumidor y la marca publicitada.',
        },
        {
          type: 'p',
          text: 'Las solicitudes de información, aclaraciones, quejas, reclamaciones, garantías, devoluciones, cancelaciones o cualquier asunto relacionado con los productos o servicios anunciados deberán dirigirse directamente al proveedor o titular de la marca correspondiente. LA AGENCIA podrá facilitar o canalizar el contacto con dicho tercero cuando sea posible, sin que ello implique asumir su representación o responsabilidad.',
        },
        {
          type: 'p',
          text: 'La información, precios, promociones, características, disponibilidad y demás condiciones de los productos o servicios anunciados son responsabilidad del tercero que los ofrece, por lo que cualquier modificación, actualización, suspensión o inexactitud de dicha información que sea ajena a LA AGENCIA no será imputable a esta.',
        },
        {
          type: 'p',
          text: 'Lo anterior se entiende sin perjuicio de las obligaciones que correspondan a LA AGENCIA respecto de los datos personales que recabe o trate directamente, conforme a su Aviso de Privacidad y a la legislación aplicable en materia de protección de datos personales.',
        },
      ],
    },
    {
      id: 'uso-de-informacion-publicitaria',
      heading: 'Uso de información para fines publicitarios',
      blocks: [
        {
          type: 'p',
          text: 'Cuando LA AGENCIA realice actividades de marketing o publicidad por cuenta de un cliente, la información de los consumidores será utilizada únicamente para las finalidades previamente determinadas y comunicadas, de conformidad con la legislación aplicable.',
        },
        {
          type: 'p',
          text: 'EL CLIENTE será responsable de proporcionar a LA AGENCIA información obtenida lícitamente y de contar con las autorizaciones, avisos y bases jurídicas que correspondan para su utilización con fines publicitarios. LA AGENCIA utilizará dicha información únicamente para la ejecución de los servicios contratados y conforme a las instrucciones acordadas con EL CLIENTE.',
        },
        {
          type: 'p',
          text: 'Lo anterior se establece sin perjuicio de las responsabilidades que legalmente correspondan a EL CLIENTE y a LA AGENCIA conforme a la naturaleza de su intervención en el tratamiento y utilización de la información de los consumidores.',
        },
      ],
    },
    {
      id: 'distribucion-y-resultados',
      heading: 'Distribución, segmentación y resultados de la publicidad',
      blocks: [
        {
          type: 'p',
          text: 'LA AGENCIA facilita la creación, gestión, distribución y difusión de información y contenido publicitario a través de las plataformas contratadas, pudiendo establecer parámetros de segmentación de audiencias de acuerdo con las características, objetivos y criterios previamente determinados con EL CLIENTE. No obstante, el alcance, la distribución efectiva, el posicionamiento, la visualización, la interacción y los resultados de las campañas dependerán de los algoritmos, políticas, sistemas, disponibilidad y demás factores propios de las plataformas y proveedores tecnológicos utilizados.',
        },
        {
          type: 'p',
          text: 'En consecuencia, LA AGENCIA no garantiza un número determinado de impresiones, visualizaciones, interacciones, prospectos, ventas, conversiones, ingresos o cualquier otro resultado específico, ni será responsable por modificaciones, restricciones, suspensiones o variaciones en el funcionamiento de los algoritmos o plataformas de terceros que puedan afectar el desempeño de las campañas.',
        },
      ],
    },
    {
      id: 'resultados',
      heading: 'Resultados',
      blocks: [
        {
          type: 'p',
          text: 'LA AGENCIA presta servicios de medios, estrategia, tecnología y optimización, pero no garantiza un número determinado de ventas, clientes, ingresos, citas, conversiones, retorno de inversión (ROI) o cualquier otro resultado económico, debido a que existen factores ajenos a su control.',
        },
      ],
    },
    {
      id: 'agentes-externos',
      heading: 'Agentes externos',
      blocks: [
        {
          type: 'p',
          text: 'LA AGENCIA no controla las decisiones, políticas, algoritmos, suspensiones, bloqueos, cambios de precios o modificaciones técnicas realizadas por plataformas de terceros.',
        },
      ],
    },
    {
      id: 'cliente',
      heading: 'Cliente',
      blocks: [
        {
          type: 'p',
          text: 'Para efectos de estos Términos y Condiciones, se entenderá por CLIENTE a la persona física o moral que adquiere, realiza o disfruta como destinatario final bienes, productos o servicios de LA AGENCIA.',
        },
      ],
    },
    {
      id: 'restricciones-de-uso',
      heading: 'Restricciones de uso',
      blocks: [
        {
          type: 'p',
          text: 'Las leyendas que restrinjan o limiten el uso del bien o servicio deberán hacerse patentes de forma clara, veraz y sin ambigüedades.',
        },
      ],
    },
    {
      id: 'derechos-en-medios-electronicos',
      heading: 'Derechos de los clientes en transacciones mediante medios electrónicos',
      blocks: [
        {
          type: 'p',
          text: 'LA AGENCIA utilizará la información, datos y materiales proporcionados por EL CLIENTE únicamente para las finalidades y servicios expresamente acordados entre las partes, manteniendo la confidencialidad de dicha información y absteniéndose de utilizarla para fines distintos de los contratados, salvo que exista autorización expresa de EL CLIENTE o requerimiento de autoridad competente.',
        },
        {
          type: 'p',
          text: 'La presente obligación será bilateral y aplicará tanto a la información proporcionada por EL USUARIO como a aquella información, documentación, sistemas, procesos, metodologías, desarrollos o recursos proporcionados por LA AGENCIA. La obligación de confidencialidad permanecerá vigente durante la relación entre las partes y con posterioridad a su terminación, mientras la información conserve su carácter confidencial.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA podrá utilizar el nombre comercial, denominación, logotipo, imagen, materiales, contenido, resultados, métricas o referencias de EL CLIENTE con fines de portafolio, casos de éxito, promoción o publicidad de sus propios servicios únicamente cuando cuente con autorización expresa y previa de EL CLIENTE. Dicha autorización deberá establecer, cuando corresponda, los elementos específicos cuyo uso haya sido autorizado.',
        },
      ],
    },
    {
      id: 'datos-personales-y-seguimiento',
      heading: 'Recopilación y uso de datos personales y tecnologías de seguimiento',
      blocks: [
        {
          type: 'p',
          text: 'LA AGENCIA podrá recabar información proporcionada directamente por el usuario mediante los formularios disponibles en el sitio web, incluyendo, de manera enunciativa mas no limitativa, nombre, correo electrónico, nombre de la marca o negocio, descripción o historia de la marca, sitio web, presupuesto y medio por el cual conoció el sitio. Dicha información será utilizada exclusivamente para atender la solicitud del usuario, proporcionar información sobre los servicios de LA AGENCIA y, en su caso, establecer el seguimiento comercial correspondiente.',
        },
        {
          type: 'p',
          text: 'El envío de la información proporcionada mediante el formulario se realiza a través de EmailJS, como proveedor tecnológico encargado de su transmisión al equipo de LA AGENCIA. Actualmente, LA AGENCIA no cuenta con una base de datos propia para el almacenamiento de dicha información, por lo que esta puede permanecer en el correo electrónico destinado a su recepción y en los servidores del proveedor tecnológico utilizado para su transmisión.',
        },
        {
          type: 'p',
          text: 'Asimismo, el sitio web utiliza tecnologías de terceros, incluyendo Meta Pixel y Google Tag, que pueden recopilar automáticamente información técnica relacionada con la navegación e interacción del usuario, como dirección IP, identificadores del dispositivo o navegador, cookies, páginas visitadas e interacciones realizadas dentro del sitio. Esta información es utilizada para fines de medición, análisis, optimización y seguimiento de campañas publicitarias en las plataformas correspondientes.',
        },
        {
          type: 'p',
          text: 'La información obtenida mediante el formulario de contacto no se combina actualmente con la información recopilada mediante Meta Pixel o Google Tag, ni se envían expresamente a dichas plataformas datos como nombre, correo electrónico o número telefónico dentro de los parámetros de los eventos configurados.',
        },
        {
          type: 'p',
          text: 'Los datos recopilados mediante Meta Pixel y Google Tag son tratados por Meta y Google, respectivamente, como proveedores terceros, de conformidad con sus propias políticas y condiciones de privacidad. LA AGENCIA utiliza la información generada por dichas herramientas únicamente para medir el desempeño de sus campañas, analizar interacciones y optimizar sus estrategias publicitarias.',
        },
        {
          type: 'p',
          text: 'LA AGENCIA se compromete a utilizar la información que se encuentre bajo su control únicamente para las finalidades informadas al usuario y para la prestación de los servicios correspondientes, absteniéndose de utilizarla para fines distintos, salvo que exista autorización expresa del titular o resulte necesario por disposición de autoridad competente o por mandato de la legislación aplicable.',
        },
        {
          type: 'p',
          text: 'El tratamiento de los datos personales y el uso de tecnologías de seguimiento se sujetarán adicionalmente a lo establecido en el Aviso de Privacidad de LA AGENCIA, disponible en el presente sitio web.',
        },
      ],
    },
    {
      id: 'servicios-de-marketing-y-entregables',
      heading: 'Servicios de marketing y propiedad de los entregables',
      blocks: [
        {
          type: 'p',
          text: 'Los servicios de marketing proporcionados por LA AGENCIA podrán comprender, de manera enunciativa mas no limitativa, la planeación y estrategia de campañas, investigación, elaboración de conceptos y guiones, grabación y producción de contenido, edición, diseño, publicación, administración y gestión de campañas publicitarias en plataformas como Meta, así como aquellas demás actividades que se encuentren expresamente incluidas en el plan, cotización, propuesta comercial o contrato correspondiente.',
        },
        {
          type: 'p',
          text: 'La contraprestación pagada por EL CLIENTE comprenderá exclusivamente los servicios y entregables expresamente establecidos y acordados entre las partes. Una vez entregados y cubiertos en su totalidad, los materiales finales que hayan sido identificados contractualmente como entregables corresponderán a EL CLIENTE, en los términos y bajo el alcance de derechos que se hayan establecido en el contrato.',
        },
        {
          type: 'p',
          text: 'No se considerarán entregables, salvo pacto expreso en contrario, los materiales en bruto o contenidos crudos, archivos editables, tomas originales, grabaciones sin editar, proyectos de edición, archivos fuente, estructuras de campañas, configuraciones internas, estrategias, metodologías, procesos, criterios de segmentación, guiones internos, herramientas, plantillas, recursos, sistemas, conocimientos técnicos o cualquier otro material desarrollado o utilizado internamente por LA AGENCIA para la prestación de sus servicios.',
        },
        {
          type: 'p',
          text: 'La entrega de los materiales finales contratados no implicará la obligación de LA AGENCIA de entregar materiales crudos, archivos fuente, metodologías o estrategias internas que no hayan sido expresamente contemplados como entregables en el contrato. En consecuencia, al concluir la prestación de los servicios, LA AGENCIA únicamente estará obligada a entregar aquellos materiales que hayan sido expresamente incluidos en el alcance contratado y que correspondan al cliente conforme a lo pactado.',
        },
        {
          type: 'p',
          text: 'Lo anterior tiene por objeto proteger los recursos, procesos, estrategias y conocimientos propios de LA AGENCIA, evitando que materiales internos, contenidos crudos o herramientas desarrolladas para la ejecución del servicio sean utilizados posteriormente por terceros o por otras agencias para reproducir, modificar o ejecutar las estrategias desarrolladas por LA AGENCIA, salvo autorización expresa o pacto contractual en contrario.',
        },
        {
          type: 'p',
          text: 'Cualquier entrega adicional de materiales crudos, archivos editables, archivos fuente, estrategias, estructuras de campañas o recursos internos de LA AGENCIA deberá encontrarse expresamente contemplada en el contrato o ser objeto de un acuerdo adicional entre las partes, pudiendo estar sujeta a una contraprestación adicional.',
        },
      ],
    },
    {
      id: 'propiedad-intelectual-y-licencias',
      heading: 'Propiedad intelectual, software y licencias de uso',
      blocks: [
        {
          type: 'p',
          text: 'La titularidad y propiedad de los sitios web, software, sistemas, plataformas, códigos, desarrollos, herramientas, recursos tecnológicos, metodologías, diseños, configuraciones, elementos y demás recursos desarrollados, proporcionados o utilizados por LA AGENCIA corresponderán exclusivamente a esta, salvo que en el contrato, plan, propuesta comercial u otro documento suscrito por las partes se establezca expresa y específicamente la transmisión de su propiedad a favor de EL CLIENTE.',
        },
        {
          type: 'p',
          text: 'La modalidad de contratación, los servicios incluidos y el alcance de los derechos otorgados a EL CLIENTE dependerán del plan o servicio específicamente contratado. Cuando así se establezca, LA AGENCIA podrá otorgar a EL CLIENTE una licencia de uso sobre determinados sitios web, software, sistemas o recursos, en los términos, plazo, alcance y condiciones expresamente establecidos en el contrato correspondiente.',
        },
        {
          type: 'p',
          text: 'El otorgamiento de una licencia de uso no implica, por sí mismo, la transmisión, cesión o transferencia de la propiedad de los recursos de LA AGENCIA, ni otorga a EL CLIENTE derechos de propiedad sobre el código fuente, arquitectura, estructura, componentes, sistemas, herramientas, metodologías, desarrollos o demás elementos que integren dichos recursos, salvo que su transmisión se encuentre expresamente pactada por escrito.',
        },
        {
          type: 'p',
          text: 'En consecuencia, EL CLIENTE únicamente adquirirá la propiedad de aquellos bienes, desarrollos o recursos respecto de los cuales exista una estipulación contractual expresa que establezca su transmisión. La existencia de un contrato de prestación de servicios, el pago de una contraprestación, la entrega de un sitio web o el otorgamiento de una licencia de uso no podrán interpretarse, por sí mismos, como una transmisión de propiedad.',
        },
        {
          type: 'p',
          text: 'En caso de que el contrato no establezca expresamente la transmisión de propiedad, todos los derechos de propiedad sobre los recursos de LA AGENCIA permanecerán en todo momento a favor de esta, aun cuando EL CLIENTE cuente con una autorización o licencia para utilizarlos durante la vigencia y bajo las condiciones establecidas en el contrato.',
        },
        {
          type: 'p',
          text: 'Las condiciones específicas de cualquier licencia, incluyendo su duración, alcance, finalidad, usuarios autorizados, restricciones, territorio, posibilidad de renovación y efectos de la terminación del contrato, deberán constar expresamente en el instrumento contractual correspondiente. En caso de existir alguna contradicción entre estas disposiciones y las condiciones particulares pactadas con EL CLIENTE, prevalecerá lo expresamente establecido en el contrato respecto de la propiedad o licencia del recurso específico.',
        },
      ],
    },
    {
      id: 'no-exclusividad',
      heading: 'No exclusividad de los sistemas y recursos tecnológicos en software',
      blocks: [
        {
          type: 'p',
          text: 'Los sistemas, software, plataformas, desarrollos, herramientas, metodologías, estructuras, códigos y demás recursos tecnológicos desarrollados, proporcionados o utilizados por LA AGENCIA que sean otorgados a EL CLIENTE mediante una licencia de uso tendrán, salvo pacto expreso en contrario, carácter no exclusivo. En consecuencia, LA AGENCIA conservará el derecho de utilizar, desarrollar, modificar, adaptar, reproducir y proporcionar dichos sistemas o recursos, así como otorgar licencias de uso sobre ellos a otros clientes.',
        },
        {
          type: 'p',
          text: 'El otorgamiento de una licencia de uso a favor de EL CLIENTE no generará, por sí mismo, ningún derecho de exclusividad, reserva, aprovechamiento exclusivo o prohibición para que LA AGENCIA utilice los mismos sistemas, desarrollos o recursos con terceros, aun cuando estos hayan sido previamente implementados, configurados o adaptados para EL CLIENTE, siempre que ello no implique utilizar información confidencial, datos personales o materiales de propiedad exclusiva de este sin la autorización correspondiente.',
        },
        {
          type: 'p',
          text: 'Cualquier derecho de exclusividad, uso exclusivo, propiedad exclusiva o limitación para que LA AGENCIA utilice o licencie determinados sistemas o recursos a favor de terceros deberá encontrarse expresamente estipulado por escrito en el contrato correspondiente, señalando de manera clara el recurso al que se refiere, su alcance, duración y demás condiciones aplicables.',
        },
        {
          type: 'p',
          text: 'En ausencia de una estipulación expresa de exclusividad o transmisión de propiedad, se entenderá que EL CLIENTE cuenta únicamente con los derechos de uso establecidos en su contrato, sin que estos limiten la propiedad, explotación, desarrollo o comercialización de los recursos tecnológicos de LA AGENCIA.',
        },
      ],
    },
    {
      id: 'confidencialidad-bilateral',
      heading: 'Cláusula de confidencialidad bilateral',
      blocks: [
        {
          type: 'p',
          text: 'La obligación de confidencialidad bilateral se regirá por lo establecido en el apartado relativo a los derechos de los clientes en las transacciones efectuadas a través del uso de medios electrónicos, ópticos o de cualquier otra tecnología.',
        },
      ],
    },
    {
      id: 'cancelacion-y-renovacion',
      heading: 'Cancelación, renovación y plazos mínimos de contratación',
      blocks: [
        {
          type: 'p',
          text: 'Los servicios prestados por LA AGENCIA podrán contratarse bajo modalidad mensual o por un plazo determinado, conforme a lo establecido en el contrato, propuesta comercial, cotización u orden de servicio correspondiente.',
        },
        { type: 'subheading', text: 'Renovación mensual del servicio' },
        {
          type: 'p',
          text: 'Cuando el servicio sea contratado bajo modalidad mensual y no exista un plazo mínimo de contratación vigente, su continuidad podrá renovarse mes con mes siempre que así lo convengan EL CLIENTE y LA AGENCIA.',
        },
        {
          type: 'p',
          text: 'La renovación de cada periodo implicará la continuidad de los servicios durante el mes correspondiente, bajo las condiciones, alcance, precio y modalidad previamente acordados, salvo que ambas partes convengan alguna modificación.',
        },
        {
          type: 'p',
          text: 'La renovación mensual no implicará por sí misma la celebración de un nuevo contrato, sino la continuidad de la relación contractual existente durante el periodo correspondiente.',
        },
        {
          type: 'p',
          text: 'Cuando exista algún mecanismo de cobro automático recurrente o se haya pactado expresamente una renovación automática, LA AGENCIA deberá informar a EL CLIENTE las condiciones aplicables y cumplir con los requisitos de información, consentimiento, aviso y cancelación establecidos por la legislación aplicable.',
        },
        { type: 'subheading', text: 'Plazos mínimos de contratación' },
        {
          type: 'p',
          text: 'Cuando EL CLIENTE y LA AGENCIA acuerden expresamente un plazo mínimo de contratación, permanencia o prestación de servicios, dicho plazo será obligatorio para ambas partes y deberá respetarse durante el periodo convenido.',
        },
        {
          type: 'p',
          text: 'Durante la vigencia del plazo mínimo, LA AGENCIA se obliga a prestar los servicios contratados en los términos, alcances y condiciones acordados, y EL CLIENTE se obliga a cumplir con los pagos, plazos y demás obligaciones asumidas durante el mismo periodo.',
        },
        {
          type: 'p',
          text: 'Ninguna de las partes podrá dar por terminado anticipadamente el servicio sujeto a un plazo mínimo de contratación, salvo que exista acuerdo entre ambas partes, incumplimiento de las obligaciones contractuales por alguna de ellas, alguna causa de terminación expresamente prevista en el contrato o cualquier otro supuesto reconocido por la legislación aplicable.',
        },
        {
          type: 'p',
          text: 'Una vez concluido el plazo mínimo pactado, la relación podrá continuar bajo modalidad de renovación mensual cuando así lo convengan EL CLIENTE y LA AGENCIA, sin que ello implique el establecimiento de un nuevo plazo mínimo, salvo que ambas partes lo acuerden expresamente.',
        },
        { type: 'subheading', text: 'Cancelación y terminación' },
        {
          type: 'p',
          text: 'Cuando no exista un plazo mínimo de contratación vigente, cualquiera de las partes podrá manifestar su voluntad de no continuar con el servicio para el periodo mensual siguiente, conforme al medio y condiciones establecidos en el contrato correspondiente.',
        },
        {
          type: 'p',
          text: 'La terminación del servicio no liberará a ninguna de las partes del cumplimiento de las obligaciones previamente generadas, incluyendo pagos pendientes, trabajos efectivamente realizados, servicios de terceros previamente autorizados u otras obligaciones devengadas durante la vigencia de la relación contractual.',
        },
        {
          type: 'p',
          text: 'En todo caso, la aplicación de estas disposiciones deberá realizarse respetando los derechos que la legislación aplicable reconozca a EL CLIENTE y las obligaciones que correspondan a LA AGENCIA.',
        },
      ],
    },
  ],
}

export interface LegalPageMeta {
  slug: string
  doc: LegalDocument
  shortTitle: string
}

/** Fuente única para rutas, sitemap y enlaces de pie de página / formulario. */
export const LEGAL_PAGES: LegalPageMeta[] = [
  { slug: 'terminos', doc: terminosCondiciones, shortTitle: 'Términos y Condiciones' },
  { slug: 'aviso-de-privacidad', doc: avisoPrivacidad, shortTitle: 'Aviso de Privacidad' },
]

export function getLegalPage(slug: string): LegalPageMeta | undefined {
  return LEGAL_PAGES.find((p) => p.slug === slug)
}
