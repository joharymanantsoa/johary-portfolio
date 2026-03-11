import johary from '../../../src/CV_johary.pdf'
import { MdOutlineFileDownload } from 'react-icons/md'

function DownloadCV() {
    return (
        <div>
            <a
                href={johary}
                download="CV_johary.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl shadow-[0_10px_0_0_#1e3a8a] hover:shadow-[0_4px_0_0_#1e3a8a] hover:translate-y-1 transition-all duration-150"
            >
                <span>Curriculum Vitae</span>
                <span className="text-2xl animate-bounce"><MdOutlineFileDownload /></span>

            </a>
        </div>
    )
}

export default DownloadCV
