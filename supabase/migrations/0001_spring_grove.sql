/*
  # Blog CMS Schema

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `description` (text)
      - `content` (text)
      - `image_url` (text)
      - `author_id` (uuid, foreign key)
      - `published` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `blog_authors`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `avatar_url` (text)
      - `created_at` (timestamp)
    
    - `blog_tags`
      - `id` (uuid, primary key)
      - `name` (text, unique)
    
    - `blog_posts_tags`
      - `post_id` (uuid, foreign key)
      - `tag_id` (uuid, foreign key)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin users
*/

-- Create blog_authors table
CREATE TABLE IF NOT EXISTS blog_authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  image_url text,
  author_id uuid REFERENCES blog_authors(id),
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_tags table
CREATE TABLE IF NOT EXISTS blog_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL
);

-- Create blog_posts_tags junction table
CREATE TABLE IF NOT EXISTS blog_posts_tags (
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES blog_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Enable RLS
ALTER TABLE blog_authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts_tags ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public users can view published posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Admin users can manage posts"
  ON blog_posts
  USING (auth.role() = 'authenticated');

CREATE POLICY "Public users can view authors"
  ON blog_authors
  FOR SELECT
  TO PUBLIC;

CREATE POLICY "Admin users can manage authors"
  ON blog_authors
  USING (auth.role() = 'authenticated');

CREATE POLICY "Public users can view tags"
  ON blog_tags
  FOR SELECT
  TO PUBLIC;

CREATE POLICY "Admin users can manage tags"
  ON blog_tags
  USING (auth.role() = 'authenticated');

CREATE POLICY "Public users can view post tags"
  ON blog_posts_tags
  FOR SELECT
  TO PUBLIC;

CREATE POLICY "Admin users can manage post tags"
  ON blog_posts_tags
  USING (auth.role() = 'authenticated');