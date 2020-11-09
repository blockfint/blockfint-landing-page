export interface PeopleInfo {
  name: string
  position: string
  desc: string
  imgSrc?: string
  contact?: string
  quote?: string
  path?: string
}
interface PeopleInfos {
  [name: string]: PeopleInfo
}

export const peopleInfos = {
  suttipong: {
    name: 'Suttipong Kanakakorn',
    position: 'Chief Executive Officer',
    desc: `Nick worked with multiple early stage startups in Silicon Valley for more than twenty years. The notably successful exit companies include Nutanix (6th employee) and Andiamo (acquired by Cisco). He brings distributed system expertise and Silicon Valley work culture to Blockfint. He has comprehensive skills to architect the solution and reach milestones quickly.

    Nick wants to make BlockFint relevant and has a big presence while offering transformation toward the better and fairer financial market. He helped design the first issued bond on digital ledger technology in Thailand. He is one of the main designers of Thailand National Digital ID systems (NDID).

    He is also our resident Blockchain guru and can talk technology and business with ease. His brilliance and humility has made the startup strong and clients love us for our grit, determination and passion to deliver the best.
    He is an endurance sport enthusiast competing himself and stretching his physical limits. It has taken him across the world participating in Ironman and Ultra Trail Running races.`,
    imgSrc: 'num2X.png',
    contact: 'Reach out to him at Nick@blockfint.com',
    quote: 'and he will be happy to have a technology infused coffee with you anytime.'
  },
  thomas: {
    name: 'Shimmy Thomas',
    position: 'Executive Director',
    desc: `He is the Indian expat who loves Thailand. His early career with Technology pioneers such as Sun Microsystems and Digital Equipment brought him to the land of smiles. And he decided to make this country his home while working with a leading Systems Integrator. He had multiple senior management roles in his 25year experience in the Industry. He is a turnaround specialist and had a successful exit with a mobile software company.
   `,
    imgSrc: 'Thomas.png',
    contact: 'Reach out to him at Thomas@blockfint.com'
  },
  wichai: {
    name: 'Wichai Patitaporn',
    position: 'Executive Director',
    desc: `Wichai is another tech nerd in the company. He is a seasoned tech evangelist. Invented the first Thai CU word writer in his early days. He has handled critical national projects for the Stock Exchange, Defense Services and large corporate clients. After his long stint with a leading Systems Integrator as Chief of R&D, he relied on his inner instincts to join with our founder and contribute with his deep technology insights. He leads our product efforts in the AgriTech venture while nudging the other product teams developing our financial and commodity market products.

    Clients and Blockfinters’ alike love him for his depth of discussion and he can handle long lectures on technology and on any general topic of interest with ease.`,
    imgSrc: 'wichai2X.png',
    contact: 'Reach out to him at  Wichai@Blockfint.com '
  },

  ponlawat: {
    name: 'Ponlawat Tantivongampai',
    position: 'Chief Operating Officer',
    desc: `Oak is currently the Chief Operating Officer of Blockfint where he manages projects and products for clients in various industries. Prior to his current position, he was project manager at Amdocs and AIS. He has over 12 years of experience in Mobile services, BSS, OSS and Mobile Application./nOak is a natural leader with a goal-oriented mindset. He tackles challenges with a positive attitude and strives to achieve team success. He is also a strong and passionate trail-runner. His determination and motivation applies to both his working life and personal life.`,
    imgSrc: 'oak2x.png'
  },

  suwanna: {
    name: 'Suwanna Nimitsurachart',
    position: 'Senior Vice President',
    desc: `Before Su joined Blockfint, she has been experiencing in Implement and Support Banking for over 37 years through all well-known banks in significant positions. With her rounded and wisdom, she will definitely guide Blockfint to solidifying go forward.`,
    imgSrc: 'suwan2x.png'
  },

  rattanapong: {
    name: 'Rattanapong Chairukwattana',
    position: 'Chief Technology Officer',
    desc: `Ake has finished his bachelor degree in Computer engineering  from King Mongkut's University of Technology Thonburi. After that he decided to continue with master degree in same major, he has finished his master from Kasetsart University. Ake always believes that life should be simple and easy. So, after working as a developer for a while he decided to move to his hometown and be a farmer. Now, he decided to shift his career path again to be our solid developer. For Ake, Blockfint is like a family to him. So, he looks after the team members as his family members.`,
    imgSrc: 'pae2X.png'
  }
} as PeopleInfos

////folder contents projects.ts
