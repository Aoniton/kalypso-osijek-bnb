import React from 'react';
import BlogCard from './BlogCard';
import SearchBar from './Search/SearchBar';
import TagFilter from './Filters/TagFilter';
import BlogPagination from './Pagination/BlogPagination';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export default function BlogGrid() {
  const {
    posts,
    totalPages,
    currentPage,
    searchTerm,
    selectedTags,
    allTags,
    setSearchTerm,
    setSelectedTags,
    setCurrentPage,
  } = useBlogPosts();

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar
          searchTerm={searchTerm}
          onSearch={(term) => {
            setSearchTerm(term);
            setCurrentPage(1);
          }}
        />
        
        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}