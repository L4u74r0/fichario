-- CREACIÓN DE USUARIOS
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    rol VARCHAR(50) CHECK (rol IN ('admin', 'diseñador', 'estampador', 'bordador')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- FICHAS TÉCNICAS (Ahora actúan como pedidos)
CREATE TABLE fichas_tecnicas (
    id SERIAL PRIMARY KEY,
    cliente VARCHAR(100) NOT NULL,  -- Cliente asociado al pedido
    archivo_pdf TEXT NULL,  -- URL del archivo PDF con toda la información
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Fecha de creación de la ficha
    estado VARCHAR(50) CHECK (estado IN ('pendiente', 'diseñando', 'ingresado')) DEFAULT 'pendiente',
    usuario_id INT REFERENCES usuarios(id),  -- Usuario que subió la ficha
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PRÁCTICAS (tipo de prenda y cantidad)
CREATE TABLE prendas (
    id SERIAL PRIMARY KEY,
    ficha_tecnica_id INT REFERENCES fichas_tecnicas(id) ON DELETE CASCADE,
    tipo VARCHAR(50) NOT NULL,  -- Camiseta, buzo, etc.
    cantidad INT NOT NULL CHECK (cantidad > 0)
);

-- PRODUCCIÓN (estado y seguimiento del progreso de la producción)
CREATE TABLE produccion (
    id SERIAL PRIMARY KEY,
    ficha_tecnica_id INT REFERENCES fichas_tecnicas(id) ON DELETE CASCADE,
    empleado_id INT REFERENCES usuarios(id),
    estado VARCHAR(50) CHECK (estado IN ('esperando', 'en proceso', 'completado')) DEFAULT 'esperando',
    fecha_inicio TIMESTAMP,
    fecha_fin TIMESTAMP,
    notas TEXT
);

-- MENSAJES ENTRE USUARIOS
CREATE TABLE mensajes (
    id SERIAL PRIMARY KEY,
    remitente_id INT REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario que envía el mensaje
    destinatario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario que recibe el mensaje
    mensaje TEXT NOT NULL,  -- Contenido del mensaje
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Fecha y hora de envío
    estado VARCHAR(50) CHECK (estado IN ('pendiente', 'leído')) DEFAULT 'pendiente',  -- Estado del mensaje
    tipo_consulta VARCHAR(50) CHECK (tipo_consulta IN ('diseño', 'producción', 'administración')) NOT NULL,  -- Sector al que va dirigido
    respondedido BOOLEAN DEFAULT FALSE,  -- Indicador de si el mensaje ha sido respondido
    respuesta TEXT,  -- Respuesta al mensaje, si corresponde
    fecha_respuesta TIMESTAMP  -- Fecha de respuesta, si corresponde
);

-- NOTIFICACIONES PARA MENSAJES
CREATE TABLE notificaciones_mensajes (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario que recibirá la notificación
    mensaje_id INT REFERENCES mensajes(id) ON DELETE CASCADE,  -- Mensaje asociado
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Fecha y hora de la notificación
    leido BOOLEAN DEFAULT FALSE  -- Si la notificación ha sido leída
);

-- NOTIFICACIONES PARA CAMBIOS EN EL ESTADO DE LOS TRABAJOS
CREATE TABLE notificaciones_trabajos (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,  -- Usuario que recibirá la notificación
    tipo VARCHAR(50) CHECK (tipo IN ('trabajo_ingresado', 'trabajo_completado')) NOT NULL,  -- Tipo de notificación
    ficha_numero INT NOT NULL,  -- Número de la ficha asociada
    usuario_nombre VARCHAR(100) NOT NULL,  -- Nombre del usuario que realizó la acción
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Fecha y hora de la notificación
    leido BOOLEAN DEFAULT FALSE  -- Si la notificación ha sido leída
);