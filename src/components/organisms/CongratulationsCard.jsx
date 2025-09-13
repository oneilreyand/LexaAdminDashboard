import React from 'react'
import Card from '../atoms/Card'
import Button from '../atoms/Button'

const CongratulationsCard = ({ name, message, buttonText, buttonLink, imageSrc, imageAlt }) => {
  return (
    <Card>
      <div className="flex items-start">
        <div className="w-full sm:w-7/12">
          <div className="p-4">
            <h5 className="text-xl font-medium text-sub-menu-active mb-3">
              Congratulations {name}! 🎉
            </h5>
            <p className="mb-6 text-sidebar-text dark:text-dark-text">{message}</p>
            <Button
              variant="primary"
              size="small"
              rounded
              onClick={() => window.location.href = buttonLink || "javascript:;"}
            >
              {buttonText}
            </Button>
          </div>
        </div>
        <div className="w-full sm:w-5/12 text-center sm:text-left">
          <div className="pt-4 pb-0 px-0 md:px-6">
            {imageSrc && (
              <img src={imageSrc} height="175" className="transform scale-x-[-1]" alt={imageAlt || "View Badge User"} />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CongratulationsCard
