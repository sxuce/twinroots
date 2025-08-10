export default function Jobs() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Fashion Designer',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'We\'re looking for a creative fashion designer to join our team and help shape the future of Twin Roots.',
      requirements: ['5+ years experience', 'Portfolio required', 'Knowledge of sustainable fashion']
    },
    {
      id: 2,
      title: 'Marketing Manager',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      description: 'Join our marketing team to help grow the Twin Roots brand and connect with our community.',
      requirements: ['3+ years experience', 'Digital marketing skills', 'Fashion industry knowledge']
    },
    {
      id: 3,
      title: 'Retail Associate',
      location: 'London, UK',
      type: 'Part-time',
      description: 'Be the face of Twin Roots in our London store, providing exceptional customer service.',
      requirements: ['Customer service experience', 'Fashion knowledge', 'Weekend availability']
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">JOBS</h1>
          <p className="text-muted-foreground text-lg">Join our team and help cultivate style</p>
        </div>
        
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="border border-border rounded-lg p-6 bg-muted hover:border-rose-gold transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{job.location}</span>
                    <span className="text-rose-gold">{job.type}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-rose-gold text-background rounded hover:bg-rose-gold-dark transition-colors">
                  Apply Now
                </button>
              </div>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <div>
                <h4 className="font-medium mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 border border-border rounded-lg p-6 bg-muted">
          <h3 className="text-xl font-semibold mb-4">General Application</h3>
          <p className="text-muted-foreground mb-4">
            Don't see a position that fits? We're always looking for talented individuals to join our team. 
            Send us your resume and a cover letter explaining why you'd be a great fit for Twin Roots.
          </p>
          <button className="px-6 py-3 bg-rose-gold text-background rounded hover:bg-rose-gold-dark transition-colors">
            Submit General Application
          </button>
        </div>
      </div>
    </div>
  )
}
