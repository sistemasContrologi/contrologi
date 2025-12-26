import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Aviso de Privacidad",
    description:
        "Consulta el Aviso de Privacidad de Contrologi y conoce cómo protegemos, utilizamos y resguardamos tus datos personales conforme a la ley.",
    openGraph: {
        title: "Aviso de Privacidad | Contrologi",
        description:
            "Conoce cómo Contrologi recopila, usa y protege tus datos personales de acuerdo con la legislación aplicable.",
        url: "https://contrologi.vercel.app/aviso-de-privacidad",
    },
};

export default function PoliticaPrivacidadPage() {
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
                        Aviso de privacidad
                    </h1>
                </div>
            </section>

            <section className="container py-14 max-w-4xl text-gray-800">
                <article className="space-y-12">

                    {/* I */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            I. Responsable del tratamiento de datos personales
                        </h2>
                        <p className="leading-relaxed">
                            Blueservices Consultoria y Desarrollo S.C. (en lo sucesivo “Contrologi”) con
                            domicilio en Facundo #4 Col. Unidad Independencia Alcaldía Magdalena Contreras
                            C.P. 10100 con correo electrónico{" "}
                            <a
                                href="mailto:contacto@contrologi.com"
                                className="text-primary underline"
                            >
                                contacto@contrologi.com
                            </a>{" "}
                            y teléfono +52 5541949396 es responsable del tratamiento de sus datos personales
                            recabados de manera personal, telefónica, correo electrónico y/o a través del
                            sitio web{" "}
                            <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                www.contrologi.com
                            </Link>{" "}
                            (en lo sucesivo el “sitio web”).
                        </p>
                    </section>

                    {/* II */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold">
                            II. Datos personales que serán tratados
                        </h2>

                        <p>Contrologi podrá recabar los siguientes datos personales:</p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Datos de Identificación</h3>
                                <ul className="list-disc pl-6">
                                    <li>Nombre y apellidos</li>
                                    <li>Nombre de usuario</li>
                                    <li>Correo electrónico</li>
                                    <li>Contraseña</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">Datos sobre la empresa</h3>
                                <ul className="list-disc pl-6">
                                    <li>Denominación/Razón Social</li>
                                    <li>Rama productiva a la que pertenece</li>
                                    <li>Número de Empleados</li>
                                    <li>Correo electrónico para habilitar usuario administrador</li>
                                    <li>Teléfonos</li>
                                    <li>Representante legal</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">Datos Fiscales</h3>
                                <ul className="list-disc pl-6">
                                    <li>Régimen Fiscal</li>
                                    <li>Rama productiva a la que pertenece</li>
                                    <li>Registro Federal de Contribuyentes (RFC)</li>
                                    <li>Nombre o Denominación/Razón Social</li>
                                    <li>Teléfonos</li>
                                    <li>Representante legal</li>
                                    <li>Archivo CER</li>
                                    <li>La firma FIEL</li>
                                    <li>Contraseña CIEC</li>
                                    <li>Fecha, cantidad, y forma de pago utilizada para pagar los servicios</li>
                                    <li>Medio a través del cual tuvo conocimiento de Contrologi</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold">Otros datos</h3>
                                <ul className="list-disc pl-6">
                                    <li>Datos que el Cliente y/o los Usuarios habilitados ingresen o generen a través de los Servicios.</li>
                                    <li>Datos recabados a través de cookies.</li>
                                    <li>Dirección IP.</li>
                                    <li>Identificación para el acceso a la cuenta del usuario.</li>
                                    <li>Preferencias y personalización de la cuenta del usuario.</li>
                                    <li>Tipo de dispositivo utilizado para acceder al sitio web.</li>
                                    <li>Tipo de navegador.</li>
                                    <li>Sistema operativo.</li>
                                    <li>Momento de acceso al sitio web.</li>
                                    <li>Tiempo de navegación en el sitio web.</li>
                                    <li>Páginas web visitadas.</li>
                                    <li>Módulos utilizados.</li>
                                    <li>Información consultada.</li>
                                    <li>Lugar de acceso.</li>
                                    <li>Página o búsqueda de referencia de acceso.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* III */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            III. Finalidades del tratamiento de datos personales
                        </h2>

                        <p>
                            Los datos personales especificados en la sección anterior serán utilizados
                            para las siguientes finalidades:
                        </p>

                        <p>
                            Finalidades que son necesarias para la existencia, mantenimiento y
                            cumplimiento de la relación entre usted y Contrologi: Para prestarle los
                            servicios disponibles a través del sitio web y los servicios de soporte
                            técnico de manera telefónica (en lo sucesivo los “Servicios”) Para
                            identificación, operación y administración. Para procesar y responder quejas
                            y sugerencias. Para enviarle información acerca de los Servicios, y
                            recordatorios de pago. Para mantener un registro de pagos y facturar los
                            Servicios. Evaluar la calidad de los Servicios y la atención del personal.
                            Realizar mejoras a la experiencia y desempeño de los Servicios. Informarle
                            sobre cambios sobre los Servicios, sitio web, Contrato de Prestación de
                            Servicios Contrologi, Términos y Condiciones de Uso, y Aviso de Privacidad.
                        </p>

                        <p>
                            Finalidades secundarias: Para enviarle información publicitaria, promocional
                            de Contrologi y de terceros. Para fines de mercadotecnia, publicidad y
                            prospección comercial. En caso de que en cualquier momento usted desee que los
                            datos personales recabados no sean utilizados para cualquiera de las finalidad
                            secundarias descritas en la presente sección deberá enviar un correo
                            electrónico con su solicitud a{" "}
                            <a
                                href="mailto:contacto@contrologi.com"
                                className="text-primary underline"
                            >
                                contacto@contrologi.com
                            </a>{" "}
                            la o las finalidades para las cuales no desea que sus datos personales sean
                            tratados.
                        </p>
                    </section>

                    {/* IV */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            IV. Transferencia de datos personales
                        </h2>

                        <p>
                            Los datos para la generación, validación y certificación que ingrese en el sitio web para la emisión de CFDIs serán transferidos a nuestro Proveedor de Certificación de CFDIs con la finalidad de que éste le proporcione dichos servicios y serán tratados por éste de conformidad con su {" "}
                            <a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer">
                                Aviso de Privacidad
                            </a>.
                        </p>

                        <p>
                            Al marcar la casilla "<b>Acepto el Contrato de Prestación de Servicios</b>" y el "<b>Aviso de Privacidad</b>", usted consiente expresamente la transferencia de datos personales establecida anteriormente.
                        </p>

                        <p>
                            Contrologi podrá transferir sus datos identificativos, de contacto y de facturación a sociedades controladoras, subsidiarias o afiliadas, o a una sociedad matriz o a cualquier sociedad del mismo grupo de Contrologi que opere bajo los mismos procesos y políticas internas.
                        </p>

                        <p>
                            Por otro lado, sus datos personales serán transferidos cuando la transferencia sea necesaria o legalmente exigida para la salvaguarda de un interés público, o para la procuración o administración de justicia; cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial; y cuando la transferencia sea precisa para el mantenimiento o cumplimiento de una relación jurídica entre el responsable y el titular.
                        </p>

                        <p>
                            Las anteriores transferencias no requieren de su consentimiento, toda vez que se encuentran previstas en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                        </p>

                        <p>
                            Los datos de registro (Nombre, Apellidos, Dirección de correo electrónico, etc.) proporcionados a través de la plataforma <strong>Zoom</strong> (<a href="https://zoom.us" target="_blank" rel="noopener noreferrer">zoom.us</a>) para la participación en seminarios en línea (webinars).
                        </p>

                    </section>

                    {/* V a XI */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            V. Medios para ejercer los derechos de acceso, rectificación, cancelación u oposición
                        </h2>
                        <p>
                            De conformidad con la <b>Ley de Datos Personales en Posesión de Particulares</b> y sujeto a las excepciones previstas en el mismo usted cuenta con los derecho de acceso, rectificación, cancelación u oposición con relación a los datos personales recabados por Contrologi. Para ejercer los derechos de acceso, rectificación, cancelación y oposición anteriormente usted o su representante deberán presentar solicitud por escrito enviada al domicilio o correo electrónico de Contrologi, mismo que se especifica en el punto I del presente Aviso de Privacidad con la información y documentación siguiente: Su nombre y domicilio, correo electrónico u otro medio para comunicarle la respuesta a su solicitud. Los documentos que acrediten su identidad, es decir, copia simple en formato impreso o electrónico de cualquier identificación oficial, o, en su caso, la representación de su representante, es decir, copia simple en formato impreso o electrónico de carta poder simple con su firma autógrafa, la de dos testigos, el mandatario y las correspondientes copias simples en formato impreso o electrónico de las identificaciones oficiales de dichas personas. La descripción clara y precisa de los datos personales respecto de los que busca ejercer alguno de los derechos anteriormente señalado. <br />
                            Cualquier otro elemento o documento que facilite la localización de sus datos personales. En el caso de las solicitudes de rectificación de datos personales, deberá también indicar las modificaciones a realizarse y aportar la documentación que sustente su petición. Salvo que usted expresamente señale que desea recibir respuesta por un medio diverso Contrologi responderá a su solicitud a través del correo electrónico proporcionado en sus solicitud en un plazo máximo de veinte días, contados desde la fecha en que se recibió la solicitud de acceso, rectificación, cancelación u oposición, su determinación adoptada, a efecto de que, si resulta procedente, se haga efectiva la misma dentro de los quince días siguientes a la fecha en que se le comunique la respuesta. Tratándose de solicitudes de acceso a datos personales, Contrologi procederá con su entrega previa acreditación de su identidad del solicitante o de su representante legal, según corresponda.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            VI. Mecanismos y procedimientos para que, en su caso, revoque su consentimiento
                        </h2>
                        <p>
                            Usted podrá en cualquier momento revocar el consentimiento que ha otorgado para el tratamiento de los datos personales recabados de acuerdo con el presente Aviso de Privacidad. Para ello, es necesario que siga el siguiente procedimiento: Presentar una solicitud por escrito debidamente firmada, dirigida a Contrologi, en el domicilio que aparece en el primer punto del presente Aviso de Privacidad o mediante correo electrónico a la dirección <a
                                href="mailto:contacto@contrologi.com"
                                className="text-primary underline"
                            >
                                contacto@contrologi.com
                            </a> a efecto de iniciar el procedimiento respectivo. Deberá señalar con precisión si desea revocar su consentimiento para todas las autorizaciones que el presente Aviso de Privacidad prevé o sólo para alguna o algunas de ellas. De igual forma, deberá proporcionar los datos que permitan su identificación como usuario. Contrologi dará respuesta a su solicitud de revocación en un plazo de 30 días naturales contados a partir del día en que se reciba su solicitud. En caso de que usted revoque su consentimiento Contrologi no podrá prestarle los Servicios por lo que se considerará que dicha solicitud implica la cancelación voluntaria de los Servicios de conformidad con el Contrato de Prestación de Servicios.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            VII. Medios para limitar el uso o divulgación de sus datos personales
                        </h2>
                        <p>
                            En caso de que no desee recibir correos electrónicos informativos o publicitarios usted deberá enviar un correo electrónico a la dirección <a
                                href="mailto:contacto@contrologi.com"
                                className="text-primary underline"
                            >
                                contacto@contrologi.com
                            </a>. o, en su caso, seguir el procedimiento que se establezca en dichos correos. El cliente a través de la cuenta del usuario administrador podrá limitar y controlar los permisos internos de los demás usuarios habilitados respecto de la información que estos pueden generar y/o visibilizar a través de los servicios.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            VIII. Procedimiento y medio por el cual se le comunicarán los cambios
                        </h2>
                        <p>
                            Contrologi se reserva el derecho de efectuar en cualquier momento modificaciones al presente Aviso de Privacidad. Estas modificaciones se podrán a su disposición mediante correo electrónico o través del sitio web:{" "}
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                contrologi.com
                            </a>.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            IX. Medidas de seguridad implementadas
                        </h2>
                        <p>
                            Para la protección de sus datos personales Contrologi ha establecido medidas de carácter administrativo, físico y técnico con el objeto de evitar daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado de los datos personales recabados.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            X. Limitación de responsabilidad
                        </h2>
                        <p>
                            A través de los Servicios usted podrá ingresar y generar información que puede ser visibilizada, administrada y/o gestionada por los demás usuarios de sus empresa por lo que Contrologi no es responsable por el uso que otros usuarios de su empresa realicen.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            XI. Legislación aplicable
                        </h2>
                        <p>
                            El presente Aviso de Privacidad se regirá e interpretará de acuerdo con las leyes aplicables de los Estados Unidos Mexicanos.
                        </p>
                    </section>

                </article>
            </section>
        </main>
    );
}