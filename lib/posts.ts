import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
    const fileNames: string[] = fs.readdirSync(postsDirectory); // gets all files in posts folder
    const allPostsData = fileNames.map((fileName) => {
        const id: string = fileName.replace(/\.md$/, ""); // remove ".md" to get id

        const fullPath: string = path.join(postsDirectory, fileName);
        const fileContents: string = fs.readFileSync(fullPath, "utf-8");
        const matterResult = matter(fileContents); // use gray-matter to parse

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            tag: matterResult.data.tag,
        };
    });

    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory); // gets all files in posts folder
    return fileNames.map((file) => {
        return {
            params: {
                id: file.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
