import Image from "next/image";
import Link from "next/link";


export const metadata = {
    title: 'Términos y condiciones',
    description: 'Términos y condiciones',
};

const actividadesProhibidas = [
    "Modificar, sustituir, cambiar o en forma alguna alterar el Contenido Contrologi.",
    "Limitar, bloquear, impedir o en cualquier forma restringir el acceso al Sitio Web y/o a los Servicios.",
    "Utilizar los Servicios de cualquier manera que pudiera interferir con, interrumpir, afectar negativamente o inhibir a otros Usuarios a disfrutar plenamente de los Servicios, o que pudiera dañar, deshabilitar, sobrecargar o deteriorar el funcionamiento de los Servicios de cualquier forma.",
    "Comprometer o tratar de poner en peligro la seguridad de los Servicios, hackear, crackear o violentar de cualquier forma la seguridad del Sitio Web, los Servicios, y/o los servidores de Contrologi, obtener de cualquier forma acceso no autorizado.",
    "Eludir o tratar de eludir las limitaciones técnicas, comerciales, administrativos de los Servicios.",
    "Generar y/o transmitir Contenido de Usuario considerado ofensivo, difamatorio, pornográfico, acosador, odioso, racial o étnicamente ofensivo, obsceno, difamatorio, calumnioso, amenazante o de cualquier otra manera inapropiada.",
    "Acosar, amenazar, intimidar o suplantar a otros Usuarios.",
    "Utilizar los Servicios para algún propósito ilegal o no más allá del alcance de su uso previsto.",
    "Copiar o utilizar Contenido Contrologi de cualquier forma no autorizada.",
    "Desarrollar y/o utilizar cualquier aplicación de materia que interactúe con los Servicios sin el consentimiento previo de Contrologi.",
    "En general cualquier otro acto de naturaleza similar o análoga a los anteriormente señalados que pueda afectar derechos de terceros o de Contrologi."
];

const condicionesCobranza = [
    "Los Servicios pueden contratarse de manera mensual o anual (en lo sucesivo “Plazo de Vigencia”). En caso de que los Servicios se contraten de manera mensual la fecha de primer pago de los Servicios determinará las posteriores fechas de corte las cuales serán 30 días a partir de su fecha de capacitación. A todos los que contraten el servicio de modo mensual se les estará enviando en su plataforma un aviso que indicara su próxima fecha límite de pago. Si por algún motivo después de los 30 días de mensualidad no recibimos su pago les quitaremos el acceso, pero cuando vuelvan a pagar les daremos acceso nuevamente y ese día comienza a correr nuevamente su mensualidad.",
    "En caso de que los Servicios se contraten de manera anual la fecha de primer pago de los Servicios determinará las posteriores fechas de corte las cuales serán cobradas de mensual día de los meses calendario subsecuentes hasta que se cumpla el periodo el mismo día y mes del año calendario siguiente.",
    "Cuando realice su pago poner en la referencia su número de cliente y así podamos identificar su pago a la brevedad (el número de cliente es el que aparece arriba en su grupo de WhatsApp), así como él envió del comprobante de pago se puede subir en el sistema, en el chat de su grupo de WhatsApp y al correo electrónico contabilidad@contrologi.com en cualquier de estas tres opciones podrá realizar él envió de su comprobante de pago (aplica para a contratación mensual o anual).",
    "En ambas contrataciones de servicio en ninguna incluye folios gratuitos.",
    "Para la compra de folios se debe enviar el pago en el chat de lunes a viernes de 9:00 am a 5:30 pm, y sábados de 9:00 am a 1:30 pm para la asignación de estos. Si dejan de pagar continuamente su mensualidad por 6 meses en automático sus folios se perderán.",
    "Si requiere que se le envié la factura previa a su fecha límite de pago favor de enviar la solicitud dos días antes de su fecha de vencimiento.",
    "Cuando desea que su factura se genere en alguna otra razón social distinta a la cual se le venía facturando mes con mes favor de notificarnos.",
    "Nuestro horario de atención para solicitud de factura es de 9:00 am a 5:00 pm y se enviara al siguiente día hábil.",
    "Si por algún motivo su pago cae sábado o domingo y es fin de mes y usted requiere de su factura para su cierre de mes favor de enviar su pago el viernes antes de las 5:00 pm, de lo contrario se estaría enviando el lunes.",
    "Para la reactivación de su servicio en el caso de que se haya bloqueado el sistema por falta de la recepción de su pago favor de enviar su comprobante de pago dentro del horario de servicio para poder realizar su activación.",
    "Cuando realicen un cambio de domicilio, razón social o correo electrónico para él envió de su factura favor de notificarnos en su grupo de chat y enviarnos la constancia o correo electrónico correctos para que nosotros actualicemos nuestra base de datos.",
    "Si desea adquirir un usuario extra tendría un costo adicional de acuerdo con el plan contratado."
];

export default function TerminosYCondicionesPage() {
    return (
        <main className="bg-accent text-black">
            <section className="bg-[url('/img/bg-secciones.webp')] flex justify-center bg-cover bg-no-repeat relative">
                <Image
                    src={"/svg/puntitos-blancos.svg"}
                    width={100}
                    height={100}
                    alt="Contrologi"
                    className="hidden xl:block absolute top-0 right-0 xl:w-[150px] opacity-30"
                />

                <Image
                    src={"/svg/puntitos-rojos.svg"}
                    width={100}
                    height={100}
                    alt="Contrologi"
                    className="hidden xl:block absolute top-0 left-0 xl:w-[500px] z-0"
                />

                <Image
                    src={"/svg/puntitos-rojos.svg"}
                    width={100}
                    height={100}
                    alt="Contrologi"
                    className="hidden xl:block absolute bottom-0 right-0 xl:w-[500px] transform scale-x-[-1] scale-y-[-1]"
                />
                <div className="container relative flex flex-col items-center text-center pt-30 pb-20">
                    <Link href={"/"} className="hidden xl:block absolute top-18 left-0">
                        <Image
                            src={"/svg/logo-contrologi.svg"}
                            width={100}
                            height={100}
                            alt="Contrologi"
                            className="xl:w-[230px]"
                        />
                    </Link>
                    <h1 className="xl:text-5xl text-3xl uppercase font-extrabold text-white mt-5 ">
                        Términos y condiciones
                    </h1>
                </div>
            </section>

            <section className="container py-14 max-w-4xl text-gray-800">
                <article className="space-y-12">

                    {/* Introducción */}
                    <section className="space-y-4">
                        <p>
                            Los presentes términos y condiciones de Uso (en lo sucesivo los
                            <strong> “Términos y Condiciones”</strong>) regulan el uso que Usted (en lo
                            sucesivo el <strong>“Usuario”</strong>) puede hacer de las funcionalidades y
                            servicios proporcionados por BlueServices Consultoría y Desarrollo S.C.
                            (en lo sucesivo <strong>“Contrologi”</strong>) a través del sitio web{" "}
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                contrologi.com
                            </a>{" "}
                            (en lo sucesivo los <strong>“Servicios”</strong>).
                        </p>
                    </section>

                    {/* I. Aceptación */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">I. Aceptación de los Términos y Condiciones</h2>

                        <p>
                            Al visitar y/o usar el sitio web otorgado por Contrologi para el uso de sus
                            sistemas (en lo sucesivo el <strong>“sitio web”</strong>) y/o los Servicios,
                            el Usuario expresamente manifiesta estar conforme y obligarse a la totalidad
                            de los presentes Términos y Condiciones, así como a las leyes y reglamentos
                            aplicables de conformidad a la legislación vigente para el uso del sitio web.
                        </p>

                        <p className="font-semibold uppercase">
                            Estos términos y condiciones generales son obligatorios y vinculantes para
                            todos los visitantes y/o usuarios y forman parte integral del contrato de
                            prestación de servicios Contrologi.
                        </p>

                        <p>
                            En caso de que el Usuario viole lo expresado en estos Términos y Condiciones,
                            Contrologi podrá sin responsabilidad y sin reembolso alguno cancelar su uso,
                            así como excluir al Usuario de futuras operaciones y/o tomar la acción legal
                            que juzgue conveniente.
                        </p>
                    </section>

                    {/* II. Definiciones */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">II. Definiciones</h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Administrador:</strong> Usuario de la Empresa que administra a los
                                demás Usuarios.
                            </li>
                            <li>
                                <strong>Empresa:</strong> Persona física o moral que contrata los Servicios
                                de Contrologi mediante la celebración del "Contrato de Prestación de Servicios".
                            </li>
                        </ul>
                    </section>

                    {/* III Cuenta */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">III. Cuenta de usuario</h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Solo podrán crear y acceder a sus cuentas de usuarios aquellos usuarios que sean
                                habilitados por el Administrador de la Empresa. Para poder crear una cuenta
                                deberán brindar la información solicitada en los formularios correspondientes.
                            </li>

                            <li>
                                El Administrador, y/o la Empresa en cualquier momento podrá restringir o cancelar
                                el acceso del Usuario a la cuenta de usuario.
                            </li>

                            <li>
                                Los datos personales recabados por Contrologi serán tratados de conformidad con el {" "}
                                <Link
                                    href="/aviso-de-privacidad"
                                    rel="noopener noreferrer"
                                    className="text-primary underline"
                                >
                                    Aviso de Privacidad
                                </Link>,
                                el cual forma parte integral de los presentes Términos y Condiciones.
                            </li>

                            <li>
                                La cuenta de usuario es personal e intransferible. Para acceder a la cuenta de
                                usuario el Usuario deberá proporcionar el número de Empresa a la que corresponde,
                                usuario y contraseña (en lo sucesivo las “Claves de Acceso”). El uso de las Claves
                                de Acceso es absoluta y entera responsabilidad del Usuario, por lo que deberá
                                resguardarlas y no ponerlas a disposición de terceros. El Usuario será responsable
                                por todo el Contenido del Usuario y las operaciones efectuadas desde su cuenta de
                                usuario.
                            </li>
                        </ul>

                    </section>

                    {/* IV. Propiedad Intelectual */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">IV. Propiedad Intelectual</h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Los textos, información, diseños, logotipos, imágenes, sonidos, animaciones,
                                grabaciones, programas de computación que conforman el Sitio Web, exceptuando el
                                contenido generado por los Usuarios (en lo sucesivo “Contenido Contrologi”), es
                                propiedad de Contrologi. Contrologi se reserva todos los derechos respecto del
                                Contenido Contrologi. El Usuario reconoce que los derechos, presentes o futuros,
                                de propiedad intelectual e industrial del Contenido Contrologi son propiedad
                                exclusiva de Contrologi. El único derecho que se le confiere es la Licencia de Uso
                                de conformidad con los presentes Términos y Condiciones.
                            </li>

                            <li>
                                Contrologi hace constar que el Contenido Contrologi se encuentra protegido por las
                                Leyes de los Estados Unidos Mexicanos, así como por convenios y tratados
                                internacionales en materia de propiedad intelectual o derechos de autor, los
                                cuales el Usuario se compromete a respetar.
                            </li>

                            <li>
                                Contrologi no otorga a favor del Usuario derecho o licencia alguna respecto de
                                patentes, derechos patrimoniales de autor, marcas comerciales, secretos
                                industriales o cualquier otro derecho de propiedad intelectual, industrial o
                                derechos de autor, distintos a los derechos otorgados sobre el Contenido
                                Contrologi por virtud de los presentes Términos y Condiciones.
                            </li>
                        </ul>

                    </section>

                    {/* V. Licencia */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">V. Licencia de Uso</h2>

                        <p>
                            Contrologi otorga al Usuario licencia de uso, no exclusiva, intransferible, y personal sobre el Contenido Contrologi con la única finalidad de que el Usuarios pueda utilizar los Servicios durante el tiempo que la Empresa a la que pertenece los haya contratado, en el entendido que cualquier utilización o intento de utilización diversa a lo anterior se encuentra prohibida.
                        </p>
                    </section>

                    {/* VI. Contenido del Usuario */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">VI. Contenido del Usuario</h2>

                        <p>
                            Al utilizar los Servicios el Usuario será capaz de ingresar, administrar, y generar datos e información en texto, gráficas, imágenes, archivos (en lo sucesivo el “Contenido del Usuario”) el cual será visto por otros Usuarios de su Empresa de acuerdo con las configuraciones que establezca el Administrador, y en todos los casos por el Administrador. Contrologi no es responsable por cualquier Contenido del Usuario o el uso que el Administrador, Usuario, u otros Usuarios realicen del Contenido del Usuario. El Usuario es el único responsable por el Contenido del Usuario, y las consecuencias que pudieran derivarse del mismo y de su utilización por otros Usuarios de la Empresa.
                        </p>
                    </section>

                    {/* VII. Actividades prohibidas */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">VII. Actividades Prohibidas</h2>

                        <p>
                            El Usuario no debe:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            {actividadesProhibidas.map((actividad, index) => (
                                <li key={index}>{actividad}</li>
                            ))}
                        </ul>
                        <p>
                            Contrologi se reserva el derecho de suspender y/o cancelar sin ningún tipo de reembolso o compensación a los Usuarios que realicen cualquiera de las actividades antes descritas.<br /> <br />
                            El Usuario reconoce que las violaciones del sistema de informática o de la seguridad de la red pueden generar responsabilidades civiles o penales. Contrologi investigará situaciones que puedan involucrar dichas violaciones y se reserva el derecho de denunciar tales acciones a las autoridades; Contrologi cooperará con la autoridad competente en la investigación de dichas violaciones en los términos establecidos en la legislación aplicable.
                        </p>
                    </section>

                    {/* VIII. Responsabilidad */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">VIII. Responsabilidad</h2>

                        <p>
                            El Usuario en este acto libera del cualquier responsabilidad, y se obliga a
                            indemnizar y sacar en paz y a salvo a Contrologi y a sus subsidiarias,
                            controladora, accionistas, directivos, empleados, funcionarios, consejeros y
                            agentes frente a cualesquier acciones, procedimientos, responsabilidades,
                            demandas, reclamaciones, pérdidas, responsabilidades, perjuicios, costos,
                            daños, gastos y costas, así como los gastos, costos y honorarios de abogados y
                            asesores externos que se deriven o se encuentren relacionados con:
                        </p>

                        {(() => {
                            const responsabilidades = [
                                "La utilización de los Servicios.",
                                "El Contenido del Usuarios y su y su utilización por parte del Usuario, otros Usuarios de la Empresa y el Administrador.",
                                "La violación por parte del Usuario de los presentes Términos y Condiciones."
                            ];

                            return (
                                <ul className="list-disc pl-6 space-y-2">
                                    {responsabilidades.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            );
                        })()}

                        <p>
                            La utilización ilegal o no autorizada de conformidad con los presentes Términos
                            y Condiciones de los Servicios, será investigada y Contrologi tomará las
                            acciones legales correspondientes.
                        </p>

                        <p>
                            Sin perjuicio de lo anterior, el Usuario acepta que, en cualquier caso, en que
                            se le atribuya cualesquier responsabilidad, ya sea directa o indirecta,
                            contractual o extracontractual, a Contrologi, sus subsidiarias, controladora,
                            accionistas, directivos, empleados, funcionarios, consejeros y agentes, la
                            responsabilidad total a cargo Contrologi sus subsidiarias, controladora,
                            accionistas, directivos, empleados, funcionarios, consejeros y agentes estará
                            limitada a la cantidad de $1,000 (mil Pesos 00/100 moneda en curso legal en los
                            Estados Unidos Mexicanos).
                        </p>

                    </section>

                    {/* IX. Cobranza */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">IX. Cobranza</h2>

                        <ol className="list-decimal pl-6 space-y-3">
                            {condicionesCobranza.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </section>

                    {/* X. Soporte */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">X. Soporte</h2>

                        <p className="leading-relaxed">
                            <strong>Atención prioritaria:</strong> Los clientes cuentan con el servicio de
                            soporte técnico reciben una atención prioritaria, lo que significa que sus
                            consultas y problemas son abordados de manera más rápida y eficiente dentro de
                            nuestros horarios establecidos.
                        </p>

                        {(() => {
                            const horariosSoporte = [
                                "Lunes a viernes de 9 a 6 p.m.",
                                "Sábado de 9 a 2 p.m.",
                                "Días festivos no laborables de acuerdo con La Ley Federal del Trabajo en México"
                            ];

                            return (
                                <ul className="list-disc pl-6 space-y-1">
                                    {horariosSoporte.map((horario, index) => (
                                        <li key={index}>{horario}</li>
                                    ))}
                                </ul>
                            );
                        })()}

                        <p className="leading-relaxed">
                            <strong>Tiempos de respuestas:</strong> Cuentan con el acompañamiento de soporte
                            técnico del cual reciben atención prioritaria, lo que significa que sus
                            consultas y problemas son abordados de manera continua, esto de acuerdo con las
                            siguientes mediciones de dificultad:
                        </p>

                        {(() => {
                            const tiemposRespuesta = [
                                "Baja: 5 a 10 min.",
                                "Media: 10 a 30 min.",
                                "Alta: 1 a 3 hrs.",
                                "Desarrollo: Tiempo no definido"
                            ];

                            return (
                                <ul className="list-disc pl-6 space-y-1">
                                    {tiemposRespuesta.map((tiempo, index) => (
                                        <li key={index}>{tiempo}</li>
                                    ))}
                                </ul>
                            );
                        })()}

                        <p>
                            <b>Uso de la plataforma</b>: Es importante tener en cuenta que para iniciar a utilizar la plataforma y de sus recursos es necesario subir toda la información solicitada por el equipo de soporte técnico.
                        </p>
                    </section>

                    {/* XI. Marketing */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">XI. Marketing</h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Publicidad:</strong> Los anuncios publicitarios dentro de las diferentes
                                plataformas de medios de comunicación de rigen bajo una temporalidad en la
                                misma.
                            </li>
                            <li>
                                <strong>Confidencialidad:</strong> El equipo está comprometido a seguir el
                                protocolo de confidencialidad de nuestros clientes.
                            </li>
                            <li>
                                <strong>Promociones:</strong> Las promociones, descuentos y ofertas están
                                sujetas a cambios y disponibilidad, según la zona geográfica y la
                                temporalidad.
                            </li>
                            <li>
                                <strong>Garantía:</strong> La garantía de nuestros servicios, tal y como puede
                                ser anunciado en los diferentes gráficos y videos, queda a disposición del
                                trabajo en equipo con el usuario que contrate los servicios.
                            </li>
                        </ul>

                    </section>

                    {/* XII. Ventas */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">XII. Ventas</h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Cotizaciones:</strong> Todas las cotizaciones se mandarán desglosando
                                los costos de IVA.
                            </li>
                            <li>
                                <strong>Precios:</strong> Los precios y costos de los servicios están sujetos a
                                cambios por temporalidad, por lo cual es necesario, el usuario este al
                                pendiente de estas actualizaciones.
                            </li>
                            <li>
                                <strong>IVA:</strong> Nuestras cotizaciones están sujetas a el IVA, el cual este
                                sujeto a cambios.
                            </li>
                            <li>
                                <strong>Proceso de trabajo:</strong> El desarrollo este sujeto a la
                                comunicación con el usuario y el equipo técnico.
                            </li>
                            <li>
                                <strong>Entrega del proyecto:</strong> Una vez realizado el pago se darán los
                                accesos a la plataforma.
                            </li>
                            <li>
                                <strong>Cargos extra:</strong> No se generarán cargos extras ya que el uso de la
                                plataforma automáticamente a falta de pago se suspenderá el servicio
                                momentáneamente hasta que el cliente de por terminado el uso del servicio o
                                que se realice el pago correspondiente.
                            </li>
                            <li>
                                <strong>Cancelaciones y devoluciones:</strong> Es importante dar a conocer con
                                anticipación la cancelación para poder en el momento determinado eliminar
                                toda la información que genero el cliente dentro de la plataforma.
                            </li>
                        </ul>

                    </section>

                    {/* XIII. Contacto */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">XIII. Contacto</h2>

                        <div className="space-y-1 text-gray-700">
                            <p className="font-semibold">BlueServices Consultoría y Desarrollo S.C.</p>

                            <p>
                                Facundo #4, Col. Unidad Independencia<br />
                                C.P. 10100, Ciudad de México
                            </p>

                            <p>
                                <span className="font-medium">Teléfono de Soporte Técnico:</span>{" "}
                                <a
                                    href="tel:+525541949396"
                                    className="text-primary hover:underline"
                                >
                                    +52 55 4194 9396
                                </a>
                            </p>
                        </div>
                    </section>


                    {/* XIV. Modificación */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">XIV. Modificación de términos y condiciones</h2>

                        <p>
                            La empresa Contrologi, se reserva el derecho de cambiar y actualizar los presentes términos y condiciones, en cualquier momento, sin una necesaria notificación previa. Estos cambios serán aplicables para todos los usuarios con los que existan proyectos en desarrollo o se estén desarrollando proyectos.
                        </p>
                        <p className="font-bold">
                            Al utilizar nuestros servicios, se están aceptando nuestros términos y condiciones. En caso de no estar de acuerdo con los mismos, el usuario puede abstenerse al uso de estos.
                        </p>
                    </section>

                </article>
            </section>

        </main>
    );
}