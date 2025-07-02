import MembershipsHero from "../components/memberships/Hero"
import MembershipsPricing from "../components/memberships/Pricing"
import MembershipsBenefits from "../components/memberships/Benefits"
import MembershipsTestimonials from "../components/memberships/Testimonials"

const MembershipsPage = () => {
  return (
    <div>
      <MembershipsHero />
      <MembershipsBenefits />
      <MembershipsPricing />
      <MembershipsTestimonials />
    </div>
  )
}

export default MembershipsPage
