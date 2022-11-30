

    data = [
{question: "¿Cuándo ocurre un desbordamiento en el buffer?", answers: {a: "Ocurre cuando un programa escribe datos fuera de los límites de la memoria asignada", b: "Ocurre cuando un código se escribe fuera de los límites de la memoria asignada", c: "Ocurre cuando los datos ingresados se escriben fuera los límites del programa", d:"Ocurre cuando el buffer no recibe los datos necesarios"}, correctAnswer: "a"},
{question: "¿Cuál es la mejor manera de evitar las vulnerabilidades del desbordamiento del buffer?", answers: {a: "Escribir código limpio para la mejorar la calidad del sistema", b: "Usar antivirus para proteger los datos del usuario", c: "Usar un lenguaje de programación que aplique seguridad de memoria y seguridad de tipos", d:"Usar pseudocódigo para mayor seguridad"}, correctAnswer: "c"},
{question: "Selecciona una operación que el programa hace cuando requiere un búfer más grande que el asignado actualmente:", answers: {a: "Cambiar dinámicamente el tamaño del búfer para que pueda acomodar los resultados de la operación.", b: "Borrar los datos establecidos para ingresar los nuevos datos faltantes", c: "Borrar la operación que no cabe en el proceso", d:"Manda un error el cual no permite realizar nada de operaciones"}, correctAnswer: "a"},
{question: "Son dos lenguajes de programación que no ayudan mucho en el rastreo de tamaño de los buffers", answers: {a: "C y C++", b: "C y JAVA", c: "JAVA y C#", d:"C++ y C#"}, correctAnswer: "a"},
{question: "¿En contra de que vulnerabilidad fue escrito el primer exploit de desbordamiento de buffer?", answers: {a: "Demonio fingerd de Berkeley", b: "Demonio de administración de Kerberos", c: "Demonio Kadmind-Tasmania", d:"Demonio Sadmind-Tasmania"}, correctAnswer: "a"},
{question: "¿Que operaciones de cadena son las primeras vulnerabilidades de desbordamiento de búfer descubiertas en C y C++?", answers: {a: "strcpy() y strncat()", b: "strncpy() y strcat()", c: "strpy() y strcat()", d:"strnpy() y strncat()"}, correctAnswer: "d"},
{question: "Versión de Apache que es susceptible a un desbordamiento de búfer debido a su uso de funciones de manipulación de cadenas ilimitadas.", answers: {a: "1.15", b: "1.31", c: "1.32", d:"1.18"}, correctAnswer: "b"},
{question: "¿Cuál es el error más común en una llamada a strncpy()?", answers: {a: "Limitar el tamaño de su búfer de origen en lugar de su destino.", b: "Limitar el tamaño de su búfer de destino en lugar de su origen.", c: "--", d:"--"}, correctAnswer: "a"},
{question: "¿Con cuántos bits rellena los espacios vacíos strncpy()?", answers: {a: "4 bytes", b: "8 bytes", c: "12 bytes", d:"ninguno"}, correctAnswer: "d"},
{question: "¿Por qué suelen ocurrir los problemas relacionados a strncat() en cuanto a desborde de buffer?", answers: {a: "Su límite está especificado como el tamaño total del buffer", b: "El búfer de destino no contiene un terminador nulo.", c: "La función escribe antes del primer terminador nulo.", d:"--"}, correctAnswer: "c"},
{question: "¿Qué sucede cuando hay errores de truncamiento?", answers: {a: "Nada", b: "Copia los datos de un lugar a otro", c: "Modifica los datos originales y cambia su ubicación", d:"--"}, correctAnswer: "c"},
{question: "¿Qué debe hacer el programador con el uso de strncat()?", answers: {a: "Corregir datos", b: "Ver el buffer de destino correcto", c: "Ver el destino del buffer", d:"Nada"}, correctAnswer: "b"},
{question: "¿Cuál es el factor estándar utilizado hoy en día para representar cadenas en la memoria en los sistemas operativos Windows modernos, las plataformas Java y .NET, y una variedad de otros sistemas?", answers: {a: "UCS-2", b: "UTF-8", c: "UTF-16", d:"SJIS"}, correctAnswer: "c"},


];

