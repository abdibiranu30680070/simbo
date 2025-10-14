/*
  # Create appointments and contacts tables for dental clinic

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `name` (text, required) - Patient's full name
      - `email` (text, required) - Patient's email address
      - `phone` (text, required) - Patient's phone number
      - `date` (date, required) - Appointment date
      - `time` (text, required) - Appointment time
      - `service` (text, required) - Type of dental service requested
      - `message` (text, optional) - Additional notes from patient
      - `status` (text, default 'pending') - Appointment status: pending, confirmed, cancelled, completed
      - `created_at` (timestamptz, default now())
    
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact's full name
      - `email` (text, required) - Contact's email address
      - `phone` (text, optional) - Contact's phone number
      - `subject` (text, required) - Message subject
      - `message` (text, required) - Contact message content
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public insert access (anyone can submit forms)
    - No public read access (admin only)
    
  3. Notes
    - Forms are public-facing for patient convenience
    - Data is stored securely with RLS
    - Admin access would be added in future iterations
*/

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  service text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert appointments (public form submission)
CREATE POLICY "Anyone can submit appointment requests"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to insert contacts (public form submission)
CREATE POLICY "Anyone can submit contact forms"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);