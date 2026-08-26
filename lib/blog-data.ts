// Blog Types
export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

// Sample Authors
const authors: Record<string, Author> = {
  admin: {
    name: "Muenot Team",
    role: "Content Team",
    avatar: "/team/default-avatar.png",
  },
  tech: {
    name: "Tech Insights",
    role: "Technology Division",
    avatar: "/team/tech-avatar.png",
  },
};

// Blog Categories
export const categories = [
  "All",
  "AI & Machine Learning",
  "E-Learning",
  "Technology",
  "Localization",
  "Industry Insights",
  "Company News",
];

// Sample Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-data-annotation",
    title: "The Future of AI Data Annotation: Trends to Watch in 2026",
    excerpt:
      "Explore the latest trends shaping AI data annotation, from automated labeling to quality assurance innovations that are transforming how we train machine learning models.",
    content: `
## Introduction

The field of AI data annotation is evolving rapidly, with new technologies and methodologies emerging to meet the growing demands of machine learning applications. As we move through 2026, several key trends are reshaping how organizations approach data labeling and annotation.

## Key Trends

### 1. Automated Annotation Tools

Machine learning-assisted annotation tools are becoming increasingly sophisticated, helping human annotators work more efficiently while maintaining high quality standards.

### 2. Quality Assurance Innovation

New QA frameworks are emerging that combine automated checks with human review, ensuring higher accuracy rates and consistency across large datasets.

### 3. Specialized Domain Expertise

As AI applications become more specialized, the demand for domain-expert annotators in fields like healthcare, legal, and finance continues to grow.

## Impact on Industry

These trends are not just technological advancements—they're fundamentally changing how businesses approach AI development. Organizations that adapt to these changes will have a significant competitive advantage.

## Conclusion

The future of AI data annotation is bright, with innovations that promise to make the process faster, more accurate, and more accessible than ever before.
    `,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    category: "AI & Machine Learning",
    tags: ["AI", "Data Annotation", "Machine Learning", "Trends"],
    author: authors.tech,
    publishedAt: "2026-01-15",
    readTime: 5,
    featured: true,
  },
  {
    id: "2",
    slug: "elearning-transformation-corporate-training",
    title: "How E-Learning is Transforming Corporate Training",
    excerpt:
      "Discover how modern e-learning solutions are revolutionizing corporate training programs, improving engagement and knowledge retention.",
    content: `
## The E-Learning Revolution

Corporate training has undergone a dramatic transformation in recent years. Traditional classroom-based training is giving way to dynamic, interactive e-learning experiences that offer flexibility, scalability, and measurable results.

## Benefits of Modern E-Learning

### Flexibility and Accessibility

Employees can learn at their own pace, on their own schedule, from anywhere in the world. This flexibility leads to higher completion rates and better knowledge retention.

### Cost Efficiency

E-learning eliminates travel costs, reduces trainer fees, and allows organizations to train thousands of employees simultaneously.

### Measurable Outcomes

Modern LMS platforms provide detailed analytics on learner progress, engagement, and performance, enabling data-driven improvements to training programs.

## Best Practices

1. **Interactive Content**: Incorporate quizzes, simulations, and gamification
2. **Microlearning**: Break content into digestible modules
3. **Mobile-First Design**: Ensure content works across all devices
4. **Regular Updates**: Keep content current and relevant

## Conclusion

E-learning is not just a trend—it's the future of corporate training. Organizations that embrace these technologies will build more skilled, adaptable workforces.
    `,
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
    category: "E-Learning",
    tags: ["E-Learning", "Corporate Training", "LMS", "Education"],
    author: authors.admin,
    publishedAt: "2026-01-10",
    readTime: 4,
    featured: true,
  },
  {
    id: "3",
    slug: "localization-strategies-global-markets",
    title: "Localization Strategies for Entering Global Markets",
    excerpt:
      "Learn effective localization strategies that help businesses successfully expand into international markets while maintaining brand consistency.",
    content: `
## Going Global

Expanding into international markets is an exciting opportunity, but it comes with unique challenges. Successful global expansion requires more than just translation—it requires comprehensive localization.

## What is Localization?

Localization goes beyond translation to adapt your content, products, and services to specific cultural contexts. This includes:

- Language adaptation
- Cultural customization
- Visual design adjustments
- Legal and regulatory compliance
- Payment and currency localization

## Key Strategies

### 1. Research Your Target Markets

Understand the cultural nuances, preferences, and expectations of your target audience before making any localization decisions.

### 2. Partner with Local Experts

Work with native speakers and cultural consultants who understand the subtleties of your target markets.

### 3. Maintain Brand Consistency

While adapting to local preferences, ensure your core brand identity remains consistent across all markets.

## Common Mistakes to Avoid

- Relying solely on machine translation
- Ignoring cultural sensitivities
- Underestimating the time and resources required
- Failing to test with local users

## Conclusion

Effective localization is an investment that pays dividends through increased market share, customer loyalty, and brand reputation.
    `,
    coverImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop&q=60",
    category: "Localization",
    tags: ["Localization", "Global Markets", "Translation", "International Business"],
    author: authors.admin,
    publishedAt: "2026-01-05",
    readTime: 6,
    featured: false,
  },
  {
    id: "4",
    slug: "building-scalable-technology-solutions",
    title: "Building Scalable Technology Solutions for Growing Businesses",
    excerpt:
      "A comprehensive guide to developing technology infrastructure that grows with your business needs.",
    content: `
## The Scalability Challenge

As businesses grow, their technology needs evolve. Building scalable solutions from the start saves time, money, and headaches down the road.

## Principles of Scalable Architecture

### 1. Modular Design

Break your applications into independent, loosely-coupled modules that can be updated or scaled independently.

### 2. Cloud-Native Approach

Leverage cloud services for automatic scaling, high availability, and global distribution.

### 3. API-First Development

Design with APIs in mind to enable easy integration and future expansion.

## Technology Stack Considerations

- **Frontend**: React, Next.js for performant web applications
- **Backend**: Node.js, Python for flexible API development
- **Database**: PostgreSQL, MongoDB for different use cases
- **Infrastructure**: AWS, Azure, or GCP for cloud hosting

## Performance Optimization

- Implement caching strategies
- Use CDNs for static content
- Optimize database queries
- Monitor and profile regularly

## Conclusion

Scalable technology is not just about handling more users—it's about building a foundation that enables business growth and innovation.
    `,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    category: "Technology",
    tags: ["Technology", "Scalability", "Cloud", "Architecture"],
    author: authors.tech,
    publishedAt: "2025-12-28",
    readTime: 7,
    featured: false,
  },
  {
    id: "5",
    slug: "ai-transforming-publishing-industry",
    title: "How AI is Transforming the Publishing Industry",
    excerpt:
      "From content creation to distribution, discover how artificial intelligence is reshaping every aspect of the publishing world.",
    content: `
## The AI Revolution in Publishing

The publishing industry is experiencing a technological transformation driven by artificial intelligence. From manuscript editing to personalized recommendations, AI is changing how content is created, curated, and consumed.

## AI Applications in Publishing

### Content Creation and Editing

AI-powered tools assist writers with grammar, style, and even content suggestions, making the editing process faster and more efficient.

### Automated Formatting

AI can automatically format manuscripts for different platforms—print, e-book, audiobook—saving significant time and resources.

### Personalized Recommendations

Machine learning algorithms analyze reader preferences to deliver personalized content recommendations, increasing engagement and sales.

### Translation and Localization

Neural machine translation enables faster, more accurate translation of content for global audiences.

## Challenges and Considerations

- Maintaining human creativity and voice
- Ensuring AI-generated content quality
- Addressing copyright and ethical concerns
- Balancing automation with human oversight

## The Future

AI won't replace human publishers—it will empower them. The most successful publishers will be those who effectively combine AI capabilities with human creativity and judgment.
    `,
    coverImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&auto=format&fit=crop&q=60",
    category: "Industry Insights",
    tags: ["AI", "Publishing", "Digital Transformation", "Content"],
    author: authors.admin,
    publishedAt: "2025-12-20",
    readTime: 5,
    featured: false,
  },
  {
    id: "6",
    slug: "muenot-expands-global-operations",
    title: "Muenot Expands Global Operations with New Service Centers",
    excerpt:
      "Muenot announces the opening of new service centers to better serve clients across different time zones and regions.",
    content: `
## Exciting Growth News

We're thrilled to announce the expansion of Muenot's global operations with new service centers strategically located to serve our growing international client base.

## New Locations

Our expansion includes new facilities in:

- **Southeast Asia**: Enhanced support for APAC clients
- **Eastern Europe**: Expanded localization and translation services
- **South America**: New hub for Spanish and Portuguese markets

## What This Means for Our Clients

### Extended Support Hours

With teams across multiple time zones, we now offer near 24/7 support for enterprise clients.

### Faster Turnaround

Regional processing centers mean faster delivery times for time-sensitive projects.

### Local Expertise

Our new locations bring local language experts and cultural knowledge to better serve specific markets.

## Our Commitment

This expansion reflects our commitment to providing world-class services to clients wherever they operate. We're investing in our people, technology, and infrastructure to ensure we continue delivering excellence.

## Looking Ahead

This is just the beginning. We have ambitious plans for continued growth and innovation in the coming years.
    `,
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
    category: "Company News",
    tags: ["Company News", "Expansion", "Global", "Growth"],
    author: authors.admin,
    publishedAt: "2025-12-15",
    readTime: 3,
    featured: false,
  },
];

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return getAllPosts();
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
