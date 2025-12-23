CREATE DATABASE fichario;

USE fichario;

CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    email NVARCHAR(150) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    created_at DATETIME2 DEFAULT SYSDATETIME()
);

INSERT INTO users (name, email, password)
VALUES ('Admin Test', 'admin@test.com', 'admin123');

SELECT * FROM users;

 -- (empresas, talleres)
CREATE TABLE organizations (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(150) NOT NULL,
    industry_type NVARCHAR(100) NOT NULL,
    created_at DATETIME2 DEFAULT SYSDATETIME()
);

INSERT INTO organizations (name, industry_type)
VALUES ('Fichar SRL', 'Textil');

SELECT * FROM organizations;


CREATE TABLE organization_users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    organization_id INT NOT NULL,
    role NVARCHAR(50) NOT NULL,
    created_at DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT fk_org_users_user
        FOREIGN KEY (user_id) REFERENCES users(id),

    CONSTRAINT fk_org_users_org
        FOREIGN KEY (organization_id) REFERENCES organizations(id),

    CONSTRAINT uq_user_org UNIQUE (user_id, organization_id)
);



-- Un usuario no puede repetirse en la misma empresa

CREATE TABLE jobs (
    id INT IDENTITY(1,1) PRIMARY KEY,
    organization_id INT NOT NULL,
    title NVARCHAR(150) NOT NULL,
    description NVARCHAR(MAX),
    status NVARCHAR(30) NOT NULL DEFAULT 'created',
    created_by INT NOT NULL,
    assigned_to INT NULL,
    created_at DATETIME2 DEFAULT SYSDATETIME(),
    updated_at DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT fk_jobs_org
        FOREIGN KEY (organization_id) REFERENCES organizations(id),

    CONSTRAINT fk_jobs_created_by
        FOREIGN KEY (created_by) REFERENCES users(id),

    CONSTRAINT fk_jobs_assigned_to
        FOREIGN KEY (assigned_to) REFERENCES users(id)
);

-- assigned_to se completa cuando el trabajo pasa a "recibido"

CREATE TABLE job_files (
    id INT IDENTITY(1,1) PRIMARY KEY,
    job_id INT NOT NULL,
    file_name NVARCHAR(255) NOT NULL,
    file_url NVARCHAR(500) NOT NULL,
    file_type NVARCHAR(50),
    uploaded_by INT NOT NULL,
    uploaded_at DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT fk_job_files_job
        FOREIGN KEY (job_id) REFERENCES jobs(id),

    CONSTRAINT fk_job_files_user
        FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- Comentarios, problemas, observaciones
CREATE TABLE job_comments (
    id INT IDENTITY(1,1) PRIMARY KEY,
    job_id INT NOT NULL,
    user_id INT NOT NULL,
    message NVARCHAR(MAX) NOT NULL,
    created_at DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT fk_job_comments_job
        FOREIGN KEY (job_id) REFERENCES jobs(id),

    CONSTRAINT fk_job_comments_user
        FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE job_history (
    id INT IDENTITY(1,1) PRIMARY KEY,
    job_id INT NOT NULL,
    action NVARCHAR(50) NOT NULL,
    old_status NVARCHAR(30),
    new_status NVARCHAR(30),
    performed_by INT NOT NULL,
    comment NVARCHAR(255),
    created_at DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT fk_job_history_job
        FOREIGN KEY (job_id) REFERENCES jobs(id),

    CONSTRAINT fk_job_history_user
        FOREIGN KEY (performed_by) REFERENCES users(id)
);


SELECT * FROM organizations;
SELECT * FROM users;
