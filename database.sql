CREATE TABLE "user" (
	id SERIAL PRIMARY KEY,
	username VARCHAR (20) UNIQUE NOT NULL,
	"password" VARCHAR (100) NOT NULL,
	accountLevel INT
);

CREATE TABLE licenses (
	id SERIAL PRIMARY KEY,
	"name" VARCHAR (50),
	icon VARCHAR (150),
	documentationURL VARCHAR (150),
	inactuveICON VARCHAR (150)
);

CREATE TABLE readmeData(
	id SERIAL PRIMARY KEY,
	userID INT NOT NULL,
	gettingStartedCode TEXT,
	overviewCode TEXT,
	shieldCode TEXT,
	textInput TEXT,
	licenseID INT REFERENCES licenses,
	conclusionCode TEXT,
	CONSTRAINT fk_event
		FOREIGN KEY (userID)
			REFERENCES "user"(id)
				ON DELETE CASCADE
);

CREATE TABLE technologiesList (
	id SERIAL PRIMARY KEY,
	"name" VARCHAR (50),
	icon VARCHAR (150),
	documentationURL VARCHAR (150)
);

CREATE TABLE techJoin (
	id SERIAL PRIMARY KEY,
	readmeID INT NOT NULL,
	techIN INT NOT NULL,
	CONSTRAINT fk_event
		FOREIGN KEY (readmeID)
			REFERENCES readmeData (id)
				ON DELETE CASCADE
);