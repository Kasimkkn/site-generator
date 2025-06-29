
import React from 'react';
import { motion } from 'framer-motion';
import EditableElement from '@/components/VisualEdit/EditableElement';
import { ReviewData } from '@/types/global';

interface VisualEditReviewsProps {
  data?: ReviewData;
}

const VisualEditReviews: React.FC<VisualEditReviewsProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <EditableElement
            section="reviews"
            field="reviewsTitle"
            type="text"
            value={data.reviewsTitle || ''}
          >
            <h2 className="text-4xl font-black text-primary mb-4">
              {data.reviewsTitle}
            </h2>
          </EditableElement>
          
          <EditableElement
            section="reviews"
            field="reviewsDescription"
            type="text"
            value={data.reviewsDescription || ''}
          >
            <p className="text-lg text-text max-w-3xl mx-auto">
              {data.reviewsDescription}
            </p>
          </EditableElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.reviewsCardsData?.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <EditableElement
                section="reviews"
                field={`reviewsCardsData.${index}.review`}
                type="text"
                value={review.review || ''}
              >
                <p className="text-gray-600 mb-4 italic">
                  "{review.review}"
                </p>
              </EditableElement>
              
              <div className="flex items-center">
                <EditableElement
                  section="reviews"
                  field={`reviewsCardsData.${index}.avatar`}
                  type="image"
                  value={review.avatar || ''}
                >
                  {review.avatar ? (
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-lime-400/20 to-pink-500/20 border-2 border-dashed border-lime-400 flex items-center justify-center">
                      <span className="text-lime-400 text-lg">👤</span>
                    </div>
                  )}
                </EditableElement>
                
                <div>
                  <EditableElement
                    section="reviews"
                    field={`reviewsCardsData.${index}.name`}
                    type="text"
                    value={review.name || ''}
                  >
                    <h4 className="text-gray-900 font-bold">
                      {review.name}
                    </h4>
                  </EditableElement>
                  
                  <EditableElement
                    section="reviews"
                    field={`reviewsCardsData.${index}.title`}
                    type="text"
                    value={review.title || ''}
                  >
                    <p className="text-gray-500 text-sm">
                      {review.title}
                    </p>
                  </EditableElement>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualEditReviews;
