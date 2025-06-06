CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    plate_number VARCHAR(9) NOT NULL,
    price NUMERIC(10,0) CHECK (price >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN DEFAULT FALSE
);