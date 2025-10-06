import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Upload } from 'lucide-react';

export default function BlogEditor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    tags: '',
    imageFile: null as File | null,
  });

  const handleImageUpload = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `blog-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload image if provided
      let imageUrl = '';
      if (formData.imageFile) {
        imageUrl = await handleImageUpload(formData.imageFile);
      }

      // Create slug from title
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      // Insert post
      const { data: post, error: postError } = await supabase
        .from('blog_posts')
        .insert({
          title: formData.title,
          slug,
          description: formData.description,
          content: formData.content,
          image_url: imageUrl,
          published: false,
        })
        .select()
        .single();

      if (postError) throw postError;

      // Handle tags
      const tags = formData.tags.split(',').map(tag => tag.trim());
      for (const tagName of tags) {
        // Insert tag if it doesn't exist
        const { data: tag } = await supabase
          .from('blog_tags')
          .insert({ name: tagName })
          .select()
          .single();

        // Create post-tag relationship
        if (tag) {
          await supabase
            .from('blog_posts_tags')
            .insert({
              post_id: post.id,
              tag_id: tag.id,
            });
        }
      }

      navigate('/admin/blog');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Create New Blog Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">Content</label>
          <textarea
            value={formData.content}
            onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            rows={10}
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">Tags (comma-separated)</label>
          <input
            type="text"
            value={formData.tags}
            onChange={e => setFormData(prev => ({ ...prev, tags: e.target.value }))}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            placeholder="tag1, tag2, tag3"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => setFormData(prev => ({ 
              ...prev, 
              imageFile: e.target.files?.[0] || null 
            }))}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg flex items-center justify-center disabled:opacity-50"
        >
          {loading ? (
            'Creating...'
          ) : (
            <>
              <Upload className="w-5 h-5 mr-2" />
              Publish Post
            </>
          )}
        </button>
      </form>
    </div>
  );
}