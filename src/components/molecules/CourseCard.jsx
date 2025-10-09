import React from 'react';
import { Clock, Star } from 'lucide-react';
import Card from '../atoms/Card';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Progress from '../atoms/Progress';
import DefaultImage from '../atoms/DefaultImage';
import { truncateText } from '../../utils/utils';

const CourseCard = ({
  image,
  category,
  rating,
  reviewCount,
  title,
  description,
  duration,
  progress,
  onStartOver,
  onContinue,
  onClick,
}) => {
  const [showDefaultImage, setShowDefaultImage] = React.useState(!image || image.trim() === '');
  const [imgSrc, setImgSrc] = React.useState(image);

  React.useEffect(() => {
    if (image && image.trim() !== '') {
      setImgSrc(image);
      setShowDefaultImage(false);
    } else {
      setShowDefaultImage(true);
    }
  }, [image]);

  const handleImageError = () => {
    setShowDefaultImage(true);
  };

  return (
    <Card className="h-full shadow-none border cursor-pointer" onClick={onClick}>
      <div className="">
        <div className="rounded-lg text-center w-full">
          {showDefaultImage ? (
            <DefaultImage
              className="w-full rounded-lg"
              text=""
            />
          ) : (
            <img
              className="w-full rounded-lg"
              src={imgSrc}
              alt={title}
              onError={handleImageError}
            />
          )}
        </div>
        <div className="p-4 pt-2">
          <div className="flex justify-between items-center mb-4">
            <Badge variant="default">{category}</Badge>
            <p className="flex items-center justify-center font-medium gap-1 mb-0">
              {rating}{' '}
              <span className="text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
              </span>
              <span className="font-normal">({reviewCount})</span>
            </p>
          </div>
          <h5 className="text-xl font-semibold mb-2">{truncateText(title, 5)}</h5>
          <p className="text-gray-600 dark:text-gray-400 mt-1 mb-4">{truncateText(description, 20)}</p>
          <p className="flex items-center mb-4">
            <Clock className="w-4 h-4 mr-2" />
            {duration}
          </p>
          <Progress value={progress} className="mb-4 h-2" />
          <div className="flex flex-row gap-4">
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                onStartOver?.();
              }}
            >
              <span>Start Over</span>
            </Button>
            <Button
              variant="primary"
              className="w-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                onContinue?.();
              }}
            >
              <span>Continue</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
