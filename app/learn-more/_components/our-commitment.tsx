export default function OurCommitment() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/commitment.jpg"
              alt="Team of professionals collaborating in a modern office"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">Your Success is Our Mission</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At xfi-nitymedia, our relationship with clients extends far beyond project delivery. We see ourselves as a
                dedicated partner in your long-term success. Our commitment is to provide not only exceptional digital
                products but also the ongoing support and strategic guidance you need to thrive in a competitive
                landscape.
              </p>
              <p>
                We are committed to delivering excellence in every detail, from the initial concept to the final
                deployment and beyond. We stand by the quality of our work and are always ready to adapt and evolve with
                your business, ensuring your digital assets remain powerful, relevant, and effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
