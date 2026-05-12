import johary from '../../../src/Johary.pdf'
import { MdOutlineFileDownload } from 'react-icons/md'

function DownloadCV() {
    return (
        <div>
            <a
                href={johary}
                download="Johary.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
                <span>Curriculum Vitae</span>
                <span className="text-2xl animate-bounce"><MdOutlineFileDownload /></span>

            </a>
        </div>
    )
}

export default DownloadCV
